import { Link } from "react-router";

export const NotFoundPage = () => {
  return (
    <div>
      <h1 className="text-9xl font-bold">404</h1>
      <h1 className="text-primary">Página não encontrada.</h1>
      <p className="text-secondary">
        A página que você está procurando não existe.
      </p>
      <p>
        <Link className="text-indigo-400 underline" to="/dashboard">
          clique aqui
        </Link>{" "}
        para voltar à página inicial.
      </p>
    </div>
  );
};
