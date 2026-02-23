import { Download, FileText, Shield } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const documents = [
  {
    id: "resolucion",
    title: "Resolución Exenta Nº 86",
    subtitle: "14 de febrero 2024",
    description: "Publicación oficial del SERNAC sobre el Proceso Voluntario Colectivo con Constructora Pacal.",
    label: "Publicación SERNAC",
    filename: "Resolucion-Exenta-N°-86-14-de-febrero-2024.pdf",
    url: "https://pacal.cl/wp-content/uploads/2024/10/Resolucion-Exenta-N%C2%B0-86-14-de-febrero-2024.pdf",
    pages: "Resolución Oficial",
    color: "from-blue-900 to-primary",
  },
  {
    id: "diario-oficial",
    title: "Publicación Diario Oficial",
    subtitle: "Proceso Voluntario Colectivo",
    description: "Publicación en el Diario Oficial de Chile del acuerdo del Proceso Voluntario Colectivo SERNAC-PACAL.",
    label: "Publicación DO",
    filename: "Publicacion-DO.pdf",
    url: "https://pacal.cl/wp-content/uploads/Publicacion-DO.pdf",
    pages: "Diario Oficial",
    color: "from-gray-800 to-gray-600",
  },
];

function DocumentCard({
  doc,
}: {
  doc: (typeof documents)[number];
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all overflow-hidden">
      {/* Thumbnail */}
      <div className={`relative h-64 bg-gradient-to-br ${doc.color} flex flex-col items-center justify-center p-6`}>
        {/* Paper effect */}
        <div className="relative w-36 h-44 bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden">
          {/* PDF header stripe */}
          <div className={`h-8 bg-gradient-to-r ${doc.color} flex items-center px-3 gap-2`}>
            <FileText className="w-4 h-4 text-white" />
            <span className="text-white text-[10px] font-bold uppercase tracking-wider">PDF</span>
          </div>
          {/* Content lines */}
          <div className="flex-1 p-3 space-y-1.5">
            <div className="h-2 bg-gray-200 rounded-full w-full" />
            <div className="h-2 bg-gray-200 rounded-full w-4/5" />
            <div className="h-2 bg-gray-200 rounded-full w-full" />
            <div className="h-2 bg-gray-200 rounded-full w-3/5" />
            <div className="h-px bg-gray-100 my-2" />
            <div className="h-2 bg-gray-200 rounded-full w-full" />
            <div className="h-2 bg-gray-200 rounded-full w-full" />
            <div className="h-2 bg-gray-200 rounded-full w-4/5" />
            <div className="h-2 bg-gray-200 rounded-full w-full" />
            <div className="h-2 bg-gray-200 rounded-full w-2/3" />
            <div className="h-px bg-gray-100 my-2" />
            <div className="h-2 bg-gray-100 rounded-full w-3/4" />
            <div className="h-2 bg-gray-100 rounded-full w-full" />
          </div>
          {/* Footer */}
          <div className="px-3 py-2 border-t border-gray-100">
            <div className="h-1.5 bg-gray-200 rounded-full w-1/2" />
          </div>
        </div>

        {/* Badge */}
        <div className="absolute top-3 right-3 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
          <span className="text-white text-xs font-bold">{doc.pages}</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-6">
        <span className="inline-block px-3 py-1 bg-primary/5 text-primary text-xs font-semibold rounded-full mb-3">
          {doc.label}
        </span>
        <h3 className="text-xl font-bold text-text-main leading-tight">
          {doc.title}
        </h3>
        <p className="text-sm font-medium text-accent mt-1">{doc.subtitle}</p>
        <p className="text-sm text-text-muted mt-3 leading-relaxed">
          {doc.description}
        </p>

        {/* Download button */}
        <a
          href={doc.url}
          target="_blank"
          rel="noopener noreferrer"
          download={doc.filename}
          className="mt-5 w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-primary hover:bg-primary-light text-white font-semibold rounded-xl transition-all shadow-md shadow-primary/20 hover:shadow-primary/30"
        >
          <Download className="w-5 h-5" />
          Descargar PDF
        </a>
      </div>
    </div>
  );
}

export default function PVCSernacPacalPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="PVC SERNAC-PACAL"
            subtitle="Proceso Voluntario Colectivo — Documentos oficiales disponibles para descarga"
            light
          />
        </div>
      </section>

      {/* Info banner */}
      <section className="bg-amber-50 border-b border-amber-200 px-4 sm:px-6 lg:px-8 py-5">
        <div className="max-w-4xl mx-auto flex items-start gap-4">
          <Shield className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-amber-800">
              Proceso Voluntario Colectivo
            </p>
            <p className="text-sm text-amber-700 mt-0.5">
              Constructora Pacal, en conjunto con el Servicio Nacional del Consumidor (SERNAC), pone a disposición de sus clientes los documentos oficiales relacionados con el Proceso Voluntario Colectivo. Descarga los archivos para revisar los detalles del acuerdo.
            </p>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {documents.map((doc) => (
              <DocumentCard key={doc.id} doc={doc} />
            ))}
          </div>

          <p className="mt-10 text-center text-xs text-text-muted">
            Ante cualquier consulta relacionada con el proceso, comunícate con nosotros a través de{" "}
            <a href="mailto:contacto@pacal.cl" className="text-primary hover:underline">
              contacto@pacal.cl
            </a>{" "}
            o visita nuestras salas de venta.
          </p>
        </div>
      </section>
    </>
  );
}
