import { Head } from './Head'
import { Header } from './Header'
export const Layout = ({children, title='Mundial Bet'}) => {
    return [
        <Head title={title} key='head'/>,
        <Header key='header'/>,
        children
    ]
}
