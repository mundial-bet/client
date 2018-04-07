import { Head } from './Head'

export const Layout = ({children, title='Mundial Bet'}) => {
    return [
        <Head title={title} key='head'/>,
        children
    ];
};
