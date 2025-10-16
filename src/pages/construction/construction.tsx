import LogoSemBackground from '@/assets/dailycue_logo.svg'

export function Construction() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img className="" src={LogoSemBackground} alt="DailyCue Logo" />
      <h1 className="text-4xl font-bold text-primary mb-4">Página em Construção</h1>
      <p className="text-lg text-secondary">Estamos trabalhando para trazer novidades em breve!</p>
    </div>
  )
}