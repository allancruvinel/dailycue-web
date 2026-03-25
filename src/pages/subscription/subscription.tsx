import { Separator } from "@/components/ui/separator";

export const Subscription = () => (
  <div className="flex flex-col items-start justify-center w-full p-4">
    <h1 className="text-3xl m-4">Assinatura</h1>
    <Separator className="w-full my-4" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
      {/* FREE */}
      <div className="border rounded-xl p-6 bg-zinc-900">
        <h2 className="text-xl font-semibold mb-2">Free</h2>
        <p className="text-3xl font-bold mb-4">
          R$0<span className="text-sm">/mês</span>
        </p>

        <ul className="space-y-2 mb-6 text-sm">
          <li>✔ Até 10 envios por dia</li>
          <li>✔ Funcionalidades básicas</li>
          <li>✔ Perfeito para testar</li>
        </ul>

        <button className="w-full bg-zinc-700 text-white py-2 rounded-md cursor-not-allowed">
          Plano atual
        </button>
      </div>

      {/* PRO */}
      <div className="border rounded-xl p-6 bg-zinc-900 border-blue-500">
        <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
          Pro <span className="text-yellow-400">★</span>
        </h2>

        <p className="text-3xl font-bold mb-4">
          R$19<span className="text-sm">/mês</span>
        </p>

        <ul className="space-y-2 mb-6 text-sm">
          <li>✔ Envios ilimitados*</li>
          <li>✔ Chats ilimitados</li>
          <li>✔ Prioridade</li>
        </ul>

        <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-md">
          Assinar agora
        </button>

        <p className="text-xs text-zinc-400 mt-3">
          *Uso sujeito a política de uso justo
        </p>
      </div>
    </div>
  </div>
);
