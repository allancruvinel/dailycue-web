import { useRouteError,Link } from "react-router"


export function ErrorPage() {
    const error = useRouteError() as Error

    return (
        <div>
            <h1 className="text-primary">Ocorreu um erro ao carregar a página.</h1>
            <p className="text-secondary">Por favor, tente novamente mais tarde.</p>
            <p><i>{error.message}</i></p>
            <p><Link to="/">clique aqui</Link> para voltar à página inicial.</p>
            
        </div>
    )
}