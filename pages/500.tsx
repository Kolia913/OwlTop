import { HTag } from '../components';
import { withLayout } from '../layout/Layout';

function Error500(): JSX.Element {
    return (
        <>
            <HTag tag='h1'>Ошибка 500</HTag>
        </>
    );
}

export default withLayout(Error500)