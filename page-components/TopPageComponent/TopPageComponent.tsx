import { Advantages, HhData, HTag, Product, Sort, Tag } from '../../components';
import { TopPageComponentProps } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';
import { TopLevelCategory } from '../../interfaces/page.interface';
import { SortEnum } from '../../components/Sort/Sort.props';
import { useEffect, useReducer } from 'react';
import { sortReducer } from './sort.reducer';
import { useReducedMotion } from 'framer-motion';

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
    const [{ products: sortedProducts, sort }, dispatchSort] =
        useReducer(sortReducer, { products, sort: SortEnum.Rating });
    const shouldReduceMotion = useReducedMotion();

    const setSort = (sort: SortEnum) => {
        dispatchSort({ type: sort });
    };

    useEffect(() => {
        dispatchSort({ type: 'RESET', payload: products })
    }, [products])

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <HTag tag='h1'>{page.title}</HTag>
                {products && <Tag color='grey' size='m' aria-label={products.length + 'элементов'}>
                    {products.length}
                </Tag>}
                <Sort sort={sort} setSort={setSort} />
            </div>
            <div role='list'>
                {sortedProducts && sortedProducts.map(p => (<Product
                    role='listitem'
                    layout={shouldReduceMotion ? false : true}
                    key={p._id}
                    product={p}
                />))}
            </div>
            <div className={styles.hhTitle}>
                <HTag tag='h2'>Вакансии - {page.category}</HTag>
                <Tag color='red' size='m'>hh.ru</Tag>
            </div>
            {firstCategory === TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}
            {page.advantages && page.advantages.length > 0 && <>
                <HTag tag='h2'>Преимущества</HTag>
                <Advantages advantages={page.advantages} />
            </>}
            {/* can use react html parser lib instead of pushing html direvtly to element */}
            {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />}
            <HTag tag='h2'>Получаемые навыки</HTag>
            {page.tags.map(t => <Tag key={t} color="primary">{t}</Tag>)}
        </div>
    );
}