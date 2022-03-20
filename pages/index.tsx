import { GetStaticProps } from 'next';
import { useState } from 'react';
import { Button, HTag, Input, PTag, Rating, Tag, Textarea } from '../components';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../helpers/api';
import Error from 'next/error'

function Home({ menu }: HomeProps): JSX.Element {

    const [rating, setRating] = useState<number>(4);

    return (
        <>
            <HTag tag='h1'>Title</HTag>
            <Button appearance='primary' arrow='right'>Кнопка</Button>
            <Button appearance='ghost' arrow='down'>Кнопка</Button>
            <PTag size='l'>Hello World!</PTag>
            <PTag size='m'>Hello World!</PTag>
            <PTag size='s'>Hello World!</PTag>
            <Tag size='s'>Ghost</Tag>
            <Tag size='m' color='red'>Red</Tag>
            <Tag size='m' color='green'>green</Tag>
            <Tag color='primary'>primary</Tag>
            <Rating rating={rating} />
            <Rating rating={rating} isEditable setRating={setRating} />
            <Input placeholder='Имя' />
            <Textarea placeholder='Текст' />
        </>
    );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
        firstCategory
    });
    return {
        props: {
            menu,
            firstCategory
        }
    };
};

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: number;
}