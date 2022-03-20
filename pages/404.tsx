import { HTag } from '../components';
import { withLayout } from '../layout/Layout';

export function Error404(): JSX.Element {
    return (
        <>
            <HTag tag='h1'>Ошибка 404</HTag>
        </>
    );
}

export default withLayout(Error404)