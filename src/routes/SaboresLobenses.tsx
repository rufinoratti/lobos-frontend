import CardPlace from "@/components/CardPlace";
import PageTransition from "@/components/PageTransition";


export default function SaboresLobensesPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#F5F2EE] pt-20">
        <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Sabores Lobenses</h1>
          </div>
          <div className="py-2 space-y-4">
            {/* Card del Escritorio */}
            <CardPlace
                imageUrl="/imagenIconos/imagenCardPlace.png"
                title="El Escritorio"
                address="9 de Julio, 57"
                category="RestoBar"
                instagramUrl="hoa"
                whatsappUrl="hola"
            />
            <CardPlace
                imageUrl="/imagenLugares/laPortena.png"
                title="La Porteña"
                address="Salgado y Junin"
                category="Confiteria"
                instagramUrl="hoa"
                whatsappUrl="hola"
            />
          </div>
        </main>
      </div>
    </PageTransition>
  );
}