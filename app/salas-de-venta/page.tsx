import SectionTitle from "@/components/ui/SectionTitle";

type ProjectRow = {
  proyecto: string;
  sala: string;
  telefono: string;
  direccion: string;
  comuna: string;
  ciudad: string;
};

type UniqueOffice = {
  nombre: string;
  telefono: string;
  direccion: string;
  ciudad: string;
};

type Zone = {
  id: string;
  name: string;
  accentColor: string;
  projects: ProjectRow[];
  offices: UniqueOffice[];
};

const zones: Zone[] = [
  {
    id: "norte",
    name: "Zona Norte",
    accentColor: "bg-amber-500",
    projects: [
      { proyecto: "Portal de Azapa I", sala: "Sala de ventas Azapa", telefono: "56968320567", direccion: "Las Torres 3350", comuna: "Arica", ciudad: "Arica" },
      { proyecto: "Portal de Azapa II", sala: "Sala de ventas Azapa", telefono: "56968320567", direccion: "Las Torres 3350", comuna: "Arica", ciudad: "Arica" },
      { proyecto: "Parque Canteras", sala: "Sala de ventas Canteras", telefono: "56994437672", direccion: "Linderos 1421", comuna: "Arica", ciudad: "Arica" },
      { proyecto: "Portal Sur II", sala: "Sala de ventas Alto Hospicio", telefono: "56920694044", direccion: "Av. Las Americas 4710 local comercial", comuna: "Alto Hospicio", ciudad: "Alto Hospicio" },
      { proyecto: "Condominio Arunta I", sala: "Sala de ventas Alto Hospicio", telefono: "56920694044", direccion: "Av. Las Americas 4710 local comercial", comuna: "Alto Hospicio", ciudad: "Alto Hospicio" },
      { proyecto: "Condominio Arunta II", sala: "Sala de ventas Alto Hospicio", telefono: "56920694044", direccion: "Av. Las Americas 4710 local comercial", comuna: "Alto Hospicio", ciudad: "Alto Hospicio" },
      { proyecto: "Condominio Volcanes", sala: "Sala de Ventas Antofagasta", telefono: "56974440231", direccion: "Jorge Washintong 2513", comuna: "Antofagasta", ciudad: "Antofagasta" },
      { proyecto: "Conjunto Residencial Laguna Verde", sala: "Sala Ventas Copiapó", telefono: "56971254504", direccion: "Colipi 500", comuna: "Copiapó", ciudad: "Copiapó" },
      { proyecto: "Bahía Remanso", sala: "Sala Ventas Copiapó", telefono: "56971254504", direccion: "Colipi 500", comuna: "Copiapó", ciudad: "Copiapó" },
      { proyecto: "Condominio Lirios del Campo", sala: "Sala Ventas Copiapó", telefono: "56971254504", direccion: "Colipi 500", comuna: "Copiapó", ciudad: "Copiapó" },
      { proyecto: "El Totoral", sala: "Sala Ventas Copiapó", telefono: "56971254504", direccion: "Colipi 500", comuna: "Copiapó", ciudad: "Copiapó" },
      { proyecto: "Condominio Los Fundadores", sala: "Sala de Ventas Los Fundadores", telefono: "56996627722", direccion: "Baquedano 401", comuna: "Coquimbo", ciudad: "Coquimbo" },
      { proyecto: "Condominio El Mañil", sala: "Sala de Ventas Los Fundadores", telefono: "56996627722", direccion: "Baquedano 402", comuna: "Coquimbo", ciudad: "Coquimbo" },
      { proyecto: "Condominio Los Aromos", sala: "Sala de venta Ovalle 2", telefono: "56968781576", direccion: "María Inés Corral Garrido esq. Costanera", comuna: "Ovalle", ciudad: "Ovalle" },
      { proyecto: "Condominio Valle del Limarí", sala: "Sala de venta Ovalle 3", telefono: "56968781576", direccion: "María Inés Corral Garrido esq. Costanera", comuna: "Ovalle", ciudad: "Ovalle" },
      { proyecto: "Condominio Las Golondrinas", sala: "Sala de venta Ovalle 4", telefono: "56968781576", direccion: "María Inés Corral Garrido esq. Costanera", comuna: "Ovalle", ciudad: "Ovalle" },
    ],
    offices: [
      { nombre: "Sala Azapa", telefono: "56968320567", direccion: "Las Torres 3350", ciudad: "Arica" },
      { nombre: "Sala Canteras", telefono: "56994437672", direccion: "Linderos 1421", ciudad: "Arica" },
      { nombre: "Sala Alto Hospicio", telefono: "56920694044", direccion: "Av. Las Americas 4710", ciudad: "Alto Hospicio" },
      { nombre: "Sala Antofagasta", telefono: "56974440231", direccion: "Jorge Washintong 2513", ciudad: "Antofagasta" },
      { nombre: "Sala Copiapó", telefono: "56971254504", direccion: "Colipi 500", ciudad: "Copiapó" },
      { nombre: "Sala Los Fundadores", telefono: "56996627722", direccion: "Baquedano 401/402", ciudad: "Coquimbo" },
      { nombre: "Sala Ovalle", telefono: "56968781576", direccion: "M. I. Corral Garrido esq. Costanera", ciudad: "Ovalle" },
    ],
  },
  {
    id: "centro",
    name: "Zona Centro",
    accentColor: "bg-primary",
    projects: [
      { proyecto: "Condominio Parque Miguel Angel", sala: "Sala de Ventas Puente Alto", telefono: "56958171635", direccion: "Calle Miguel Angel 1266", comuna: "Puente Alto", ciudad: "Santiago" },
      { proyecto: "Emblema Bicentenario", sala: "Sala de Ventas Puente Alto", telefono: "56958171635", direccion: "Calle Miguel Angel 1266", comuna: "Puente Alto", ciudad: "Santiago" },
      { proyecto: "Jardines de Aconcagua Etapa I", sala: "Sala de Ventas Puente Alto", telefono: "56958171635", direccion: "Calle Miguel Angel 1266", comuna: "Puente Alto", ciudad: "Santiago" },
      { proyecto: "Jardines de Aconcagua II", sala: "Sala de Ventas Puente Alto", telefono: "56958171635", direccion: "Calle Miguel Angel 1266", comuna: "Puente Alto", ciudad: "Santiago" },
      { proyecto: "Hacienda del Maipo", sala: "Sala de Ventas Melipilla", telefono: "56963217637", direccion: "Avenida Principal 382, El Maitén", comuna: "Melipilla", ciudad: "Melipilla" },
      { proyecto: "Barrio Oriente II", sala: "Sala de ventas Barrio Oriente II", telefono: "56994363082", direccion: "Miske 433, Los Andes", comuna: "Los Andes", ciudad: "Los Andes" },
      { proyecto: "Aires de Aconcagua", sala: "Sala de ventas Barrio Oriente II", telefono: "56994363082", direccion: "Miske 433, Los Andes", comuna: "Los Andes", ciudad: "Los Andes" },
      { proyecto: "Vista Aconcagua", sala: "Sala de ventas Barrio Oriente II", telefono: "56994363082", direccion: "Miske 433, Los Andes", comuna: "Los Andes", ciudad: "Los Andes" },
      { proyecto: "Barrio Oriente Jdla IV – Los Andes", sala: "Sala de ventas Barrio Oriente II", telefono: "56994363082", direccion: "Miske 433, Los Andes", comuna: "Los Andes", ciudad: "Los Andes" },
      { proyecto: "Condominio Robles del Aconcagua", sala: "Sala de ventas Barrio Oriente II", telefono: "56994363082", direccion: "Miske 433, Los Andes", comuna: "Los Andes", ciudad: "Los Andes" },
      { proyecto: "Condominio El Real", sala: "Sala de ventas Barrio Oriente II", telefono: "56994363082", direccion: "Miske 433, Los Andes", comuna: "Los Andes", ciudad: "Los Andes" },
      { proyecto: "Vista San Francisco I", sala: "Sala de ventas Barrio Oriente II", telefono: "56994363082", direccion: "Miske 433, Los Andes", comuna: "Los Andes", ciudad: "Los Andes" },
      { proyecto: "Vista San Francisco II", sala: "Sala de ventas Barrio Oriente II", telefono: "56994363082", direccion: "Miske 433, Los Andes", comuna: "Los Andes", ciudad: "Los Andes" },
      { proyecto: "Altos de Marga Marga I", sala: "Sala de Ventas Camino del Sol", telefono: "56997322967", direccion: "Cumming 1621, Quilpué", comuna: "Quilpué", ciudad: "Quilpué" },
      { proyecto: "Altos de Marga Marga II", sala: "Sala de Ventas Camino del Sol", telefono: "56997322967", direccion: "Cumming 1621, Quilpué", comuna: "Quilpué", ciudad: "Quilpué" },
      { proyecto: "Altos de Marga Marga III", sala: "Sala de Ventas Camino del Sol", telefono: "56997322967", direccion: "Cumming 1621, Quilpué", comuna: "Quilpué", ciudad: "Quilpué" },
      { proyecto: "Vista Marga Marga", sala: "Sala de Ventas Camino del Sol", telefono: "56997322967", direccion: "Cumming 1621, Quilpué", comuna: "Quilpué", ciudad: "Quilpué" },
      { proyecto: "Vista Marga Marga II", sala: "Sala de Ventas Camino del Sol", telefono: "56997322967", direccion: "Cumming 1621, Quilpué", comuna: "Quilpué", ciudad: "Quilpué" },
      { proyecto: "Camino del Sol", sala: "Sala de Ventas Camino del Sol", telefono: "56997322967", direccion: "Cumming 1621, Quilpué", comuna: "Quilpué", ciudad: "Quilpué" },
      { proyecto: "Condominio Piedra Montaña", sala: "Sala de Ventas Camino del Sol", telefono: "56997322967", direccion: "Cumming 1621, Quilpué", comuna: "Quilpué", ciudad: "Quilpué" },
      { proyecto: "Cumbres de Miramar I", sala: "Sala de ventas San Antonio", telefono: "56953920059", direccion: "José Angel Ortuzar 990, San Antonio", comuna: "San Antonio", ciudad: "San Antonio" },
      { proyecto: "Cumbres de Miramar II", sala: "Sala de ventas San Antonio", telefono: "56953920059", direccion: "José Angel Ortuzar 990, San Antonio", comuna: "San Antonio", ciudad: "San Antonio" },
      { proyecto: "Cumbres De Miramar III", sala: "Sala de ventas San Antonio", telefono: "56953920059", direccion: "José Angel Ortuzar 990, San Antonio", comuna: "San Antonio", ciudad: "San Antonio" },
      { proyecto: "Cumbres de Miramar – Etapa IV", sala: "Sala de ventas San Antonio", telefono: "56953920059", direccion: "José Angel Ortuzar 990, San Antonio", comuna: "San Antonio", ciudad: "San Antonio" },
      { proyecto: "Cumbres de Miramar V", sala: "Sala de ventas San Antonio", telefono: "56953920059", direccion: "José Angel Ortuzar 990, San Antonio", comuna: "San Antonio", ciudad: "San Antonio" },
      { proyecto: "Cumbres de Miramar Vb", sala: "Sala de ventas San Antonio", telefono: "56953920059", direccion: "José Angel Ortuzar 990, San Antonio", comuna: "San Antonio", ciudad: "San Antonio" },
      { proyecto: "Cumbres de Miramar VI", sala: "Sala de ventas San Antonio", telefono: "56953920059", direccion: "José Angel Ortuzar 990, San Antonio", comuna: "San Antonio", ciudad: "San Antonio" },
      { proyecto: "Vista Alameda", sala: "Sala de Ventas Rancagua", telefono: "56997575956", direccion: "Av. Mauque 0525, Depto 113, Cond. Vista Alameda", comuna: "Rancagua", ciudad: "Rancagua" },
      { proyecto: "Condominio Mirador Alameda", sala: "Sala de Ventas Rancagua", telefono: "56997575956", direccion: "Av. Mauque 0525, Depto 113, Cond. Vista Alameda", comuna: "Rancagua", ciudad: "Rancagua" },
      { proyecto: "Los Molinos", sala: "Sala de Ventas Rancagua", telefono: "56997575956", direccion: "Av. Mauque 0525, Depto 113, Cond. Vista Alameda", comuna: "Rancagua", ciudad: "Rancagua" },
      { proyecto: "Parrones de Santa Cruz", sala: "Sala de Ventas Rancagua", telefono: "56997575956", direccion: "Av. Mauque 0525, Depto 113, Cond. Vista Alameda", comuna: "Rancagua", ciudad: "Rancagua" },
      { proyecto: "Valle Los Parrones", sala: "Sala de Ventas Rancagua", telefono: "56997575956", direccion: "Av. Mauque 0525, Depto 113, Cond. Vista Alameda", comuna: "Rancagua", ciudad: "Rancagua" },
      { proyecto: "Conjunto Residencial Los Libertadores", sala: "Sala de Ventas Rancagua", telefono: "56997575956", direccion: "Av. Mauque 0525, Depto 113, Cond. Vista Alameda", comuna: "Rancagua", ciudad: "Rancagua" },
    ],
    offices: [
      { nombre: "Sala Puente Alto", telefono: "56958171635", direccion: "Calle Miguel Angel 1266", ciudad: "Puente Alto" },
      { nombre: "Sala Melipilla", telefono: "56963217637", direccion: "Av. Principal 382, El Maitén", ciudad: "Melipilla" },
      { nombre: "Sala Barrio Oriente II", telefono: "56994363082", direccion: "Miske 433", ciudad: "Los Andes" },
      { nombre: "Sala Camino del Sol", telefono: "56997322967", direccion: "Cumming 1621", ciudad: "Quilpué" },
      { nombre: "Sala San Antonio", telefono: "56953920059", direccion: "José Angel Ortuzar 990", ciudad: "San Antonio" },
      { nombre: "Sala Rancagua", telefono: "56997575956", direccion: "Av. Mauque 0525, Depto 113", ciudad: "Rancagua" },
    ],
  },
  {
    id: "sur",
    name: "Zona Sur",
    accentColor: "bg-green-700",
    projects: [
      { proyecto: "Conjunto Residencial Los Trigales", sala: "Sala de Ventas Talca", telefono: "56958167115", direccion: "Avenida San Miguel 3400", comuna: "Talca", ciudad: "Talca" },
      { proyecto: "Vista San Miguel", sala: "Sala de Ventas Talca", telefono: "56958167115", direccion: "Avenida San Miguel 3400", comuna: "Talca", ciudad: "Talca" },
      { proyecto: "Condominio Gran Roble", sala: "Sala de Ventas Talca", telefono: "56958167115", direccion: "4 Sur 3215", comuna: "Talca", ciudad: "Talca" },
      { proyecto: "Cumbres de San Miguel", sala: "Sala de Ventas Talca", telefono: "56958167115", direccion: "Avenida San Miguel 3400", comuna: "Talca", ciudad: "Talca" },
      { proyecto: "Los Laureles del Maule", sala: "Sala de Ventas Talca", telefono: "56958167115", direccion: "Avenida San Miguel 3400", comuna: "Talca", ciudad: "Talca" },
      { proyecto: "Valle La Arbolada", sala: "Sala de Ventas Talca", telefono: "56985271109", direccion: "Avenida San Miguel 3400", comuna: "Talca", ciudad: "Talca" },
      { proyecto: "Cumbres de Lantaño", sala: "Sala de Ventas Chillán – Nuevo Lantaño", telefono: "56985271109", direccion: "Camino Las Rosas N° 518", comuna: "Chillán", ciudad: "Chillán" },
      { proyecto: "Condominio Nuevo Lantaño", sala: "Sala de Ventas Chillán – Nuevo Lantaño", telefono: "56985271109", direccion: "Camino Las Rosas N° 518", comuna: "Chillán", ciudad: "Chillán" },
      { proyecto: "Conde del Maule", sala: "Sala de Ventas Chillán – Nuevo Lantaño", telefono: "56990173481", direccion: "Camino Las Rosas N° 518", comuna: "Chillán", ciudad: "Chillán" },
      { proyecto: "Condominio Cumbres", sala: "Sala Ventas Cumbres Hualpén", telefono: "56958166132", direccion: "Av. Cristobal Colón 8551, Depto 107A", comuna: "Hualpén", ciudad: "Hualpén" },
      { proyecto: "Condominio Alto Mirador", sala: "Sala Ventas Cumbres Hualpén", telefono: "56958166132", direccion: "Av. Cristobal Colón 8551, Depto 107A", comuna: "Hualpén", ciudad: "Hualpén" },
      { proyecto: "Conjunto Residencial El Canelo", sala: "Sala de Ventas Coronel", telefono: "56961587996", direccion: "Avenida Llacolén 4570", comuna: "Coronel", ciudad: "Coronel" },
      { proyecto: "Las Orquideas", sala: "Sala de Ventas Las Orquideas", telefono: "56964943878", direccion: "Comandante Luis Soto 759", comuna: "Los Ángeles", ciudad: "Los Ángeles" },
      { proyecto: "Sendero del Bosque", sala: "Sala de Ventas Osorno", telefono: "56964943878", direccion: "Felizardo Asenjo S/N", comuna: "Osorno", ciudad: "Osorno" },
      { proyecto: "Condominio Rahue", sala: "Sala de Ventas Osorno", telefono: "56964943878", direccion: "Felizardo Asenjo S/N", comuna: "Osorno", ciudad: "Osorno" },
    ],
    offices: [
      { nombre: "Sala Talca", telefono: "56958167115", direccion: "Av. San Miguel 3400", ciudad: "Talca" },
      { nombre: "Sala Chillán – Nuevo Lantaño", telefono: "56985271109", direccion: "Camino Las Rosas N° 518", ciudad: "Chillán" },
      { nombre: "Sala Cumbres Hualpén", telefono: "56958166132", direccion: "Av. Cristobal Colón 8551, Depto 107A", ciudad: "Hualpén" },
      { nombre: "Sala Coronel", telefono: "56961587996", direccion: "Avenida Llacolén 4570", ciudad: "Coronel" },
      { nombre: "Sala Las Orquideas", telefono: "56964943878", direccion: "Comandante Luis Soto 759", ciudad: "Los Ángeles" },
      { nombre: "Sala Osorno", telefono: "56964943878", direccion: "Felizardo Asenjo S/N", ciudad: "Osorno" },
    ],
  },
];

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ZoneTable({ projects }: { projects: ProjectRow[] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
      <table className="w-full text-sm min-w-[700px]">
        <thead>
          <tr style={{ backgroundColor: "#01265C" }} className="text-white">
            <th className="px-4 py-3 text-left font-bold text-[15px]">Proyecto</th>
            <th className="px-4 py-3 text-left font-bold text-[15px]">Sala de ventas</th>
            <th className="px-4 py-3 text-left font-bold text-[15px]">Teléfono</th>
            <th className="px-4 py-3 text-left font-bold text-[15px]">Dirección</th>
            <th className="px-4 py-3 text-left font-bold text-[15px]">Comuna</th>
            <th className="px-4 py-3 text-left font-bold text-[15px]">Ciudad</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((row, i) => (
            <tr
              key={i}
              style={{ backgroundColor: i % 2 === 0 ? "#ffffff" : "#F6F7FD" }}
            >
              <td className="px-4 py-3 text-[#76767F]">{row.proyecto}</td>
              <td className="px-4 py-3 text-[#76767F] whitespace-nowrap">{row.sala}</td>
              <td className="px-4 py-3 whitespace-nowrap">
                <a
                  href={`tel:+${row.telefono}`}
                  className="text-[#76767F] hover:text-primary transition-colors"
                >
                  +{row.telefono}
                </a>
              </td>
              <td className="px-4 py-3 text-[#76767F]">{row.direccion}</td>
              <td className="px-4 py-3 text-[#76767F] whitespace-nowrap">{row.comuna}</td>
              <td className="px-4 py-3 text-[#76767F] whitespace-nowrap">{row.ciudad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function OfficeCards({ offices }: { offices: UniqueOffice[] }) {
  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {offices.map((office, i) => (
        <div key={i} className="bg-white rounded-xl border border-gray-200 p-4 flex flex-col gap-3 shadow-sm">
          <div>
            <p className="font-semibold text-text-main text-sm">{office.nombre}</p>
            <p className="text-xs text-text-muted mt-0.5">{office.ciudad}</p>
          </div>
          <p className="text-xs text-[#76767F] leading-relaxed">{office.direccion}</p>
          <a
            href={`https://wa.me/${office.telefono}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto flex items-center justify-center gap-2 px-3 py-2 bg-green-500 hover:bg-green-600 text-white text-xs font-semibold rounded-lg transition-colors"
          >
            <WhatsAppIcon />
            +{office.telefono}
          </a>
        </div>
      ))}
    </div>
  );
}

export default function SalasDeVentaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Salas de Venta"
            subtitle="Encuéntranos a lo largo de Chile — de Arica a Osorno"
            light
          />
        </div>
      </section>

      {/* Zones */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto space-y-16">
          {zones.map((zone) => (
            <div key={zone.id}>
              {/* Zone header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`px-5 py-2 rounded-full text-white font-bold text-sm ${zone.accentColor}`}>
                  {zone.name}
                </div>
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-xs text-text-muted">
                  {zone.projects.length} proyectos · {zone.offices.length} salas
                </span>
              </div>

              {/* Table */}
              <ZoneTable projects={zone.projects} />

              {/* Unique offices with WhatsApp */}
              <p className="mt-6 text-xs font-semibold text-text-muted uppercase tracking-widest">
                Contacto directo por sala
              </p>
              <OfficeCards offices={zone.offices} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
