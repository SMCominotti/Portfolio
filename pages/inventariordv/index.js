const InventarioRDV = () => {
  return (
    <div className="h-full overflow-y-auto bg-primary/30 pt-40 pb-32 px-4">
      <div className="container mx-auto max-w-[900px]">

        {/* Título */}
        <h2 className="h2 text-center mb-2">
          InventarioRDV <span className="text-accent">.</span>
        </h2>
        <p className="text-center mb-12 text-white/60">
          Sistema de gestión de inventario para Prensa Ibérica
        </p>

        {/* Qué es */}
        <h3 className="text-2xl text-accent mb-3">Qué es</h3>
        <p className="mb-8 leading-relaxed">
          Una aplicación web para gestionar los datáfonos (terminales de pago)
          de los puntos de venta —kioskos, papelerías, estancos— de las
          distribuidoras de Prensa Ibérica en Cádiz, Málaga y Sevilla. Antes
          toda esa información vivía en planillas de Excel dispersas; la app
          permite importarla, consultarla, filtrarla y exportarla desde el
          navegador, con control de acceso por rol.
        </p>

        {/* El stack */}
        <h3 className="text-2xl text-accent mb-3">El stack</h3>
        <p className="mb-8 leading-relaxed">
          Frontend en Vue 3 + TypeScript + Vite. Backend en Fastify +
          TypeScript con Drizzle ORM sobre SQLite. Autenticación con JWT y tres
          roles (administrador, operador, gerente).
        </p>

        {/* Lo técnico */}
        <h3 className="text-2xl text-accent mb-4">Lo técnico que me enorgullece</h3>
        <div className="flex flex-col gap-4 mb-8">

          <div className="bg-white/5 rounded-lg p-5">
            <h4 className="font-bold mb-1">Arquitectura hexagonal</h4>
            <p className="text-white/70 leading-relaxed">
              Puertos y adaptadores, con separación en capas de dominio,
              aplicación e infraestructura. La lógica de negocio define
              contratos sin saber nada de la tecnología que los implementa, de
              modo que la base de datos o el framework podrían cambiar sin tocar
              el núcleo del negocio.
            </p>
          </div>

          <div className="bg-white/5 rounded-lg p-5">
            <h4 className="font-bold mb-1">Principios SOLID</h4>
            <p className="text-white/70 leading-relaxed">
              Aplicados en decisiones concretas. El principio Open/Closed lo
              resolví con el patrón Visitor en la importación: si llega un nuevo
              formato de Excel, se agrega un perfil nuevo sin tocar el código que
              ya funciona. Lo mismo en los filtros, que se cargan dinámicamente
              desde la base de datos en vez de estar fijos en el código.
            </p>
          </div>

          <div className="bg-white/5 rounded-lg p-5">
            <h4 className="font-bold mb-1">Validación con Zod</h4>
            <p className="text-white/70 leading-relaxed">
              En la frontera del backend, como última barrera antes de
              persistir: ningún dato entra a la base sin validarse, aunque el
              formulario del frontend se saltee.
            </p>
          </div>

          <div className="bg-white/5 rounded-lg p-5">
            <h4 className="font-bold mb-1">Auditoría de cambios</h4>
            <p className="text-white/70 leading-relaxed">
              Una tabla dedicada registra quién modificó cada punto de venta, qué
              campos cambiaron, los valores anteriores y nuevos, y cuándo.
              Trazabilidad pensada para un sistema real.
            </p>
          </div>

          <div className="bg-white/5 rounded-lg p-5">
            <h4 className="font-bold mb-1">Paginación en el backend</h4>
            <p className="text-white/70 leading-relaxed">
              En lugar de cargar todos los registros en el navegador y filtrar
              ahí, el frontend pide al backend solo la página que necesita, con
              los filtros y totales calculados sobre el dataset completo. Una
              decisión de rendimiento pensada para escalar.
            </p>
          </div>

          <div className="bg-white/5 rounded-lg p-5">
            <h4 className="font-bold mb-1">Control de acceso por rol en dos capas</h4>
            <p className="text-white/70 leading-relaxed">
              El frontend oculta las acciones que un rol no puede usar y el
              backend las bloquea de verdad. Defensa en capas: el front por
              comodidad, el back por seguridad.
            </p>
          </div>

          <div className="bg-white/5 rounded-lg p-5">
            <h4 className="font-bold mb-1">Tres niveles de testing</h4>
            <p className="text-white/70 leading-relaxed">
              92 tests unitarios y de integración con Vitest (con base de datos
              real), más 9 tests end-to-end con Playwright sobre Chromium.
            </p>
          </div>

        </div>

        {/* Qué aprendí */}
        <h3 className="text-2xl text-accent mb-3">Qué aprendí</h3>
        <p className="mb-10 leading-relaxed">
          A pensar en arquitectura escalable y no solo en "que funcione", a
          trabajar con datos reales de un cliente respetando su
          confidencialidad, y a sostener buenas prácticas —tests, control de
          versiones, documentación— durante meses de desarrollo continuo.
        </p>

        {/* Nota de confidencialidad */}
        <div className="bg-accent/10 border border-accent/30 rounded-lg p-5 mb-8">
          <p className="text-white/80 leading-relaxed">
            <span className="font-bold">Sobre el código:</span> al tratarse de
            un proyecto con datos reales de un cliente, el repositorio es privado
            y las capturas no muestran información sensible. 
          </p>
        </div>

        {/* Botón volver */}
        <div className="text-center">
          <a href="/work" className="inline-block px-6 py-3 rounded-full bg-accent text-white hover:bg-accent/80 transition-all">← Volver a proyectos</a>
        </div>

      </div>
    </div>
  );
};

export default InventarioRDV;