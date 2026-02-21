 # Technical Test – Nimble Gravity

 ## 🚀 Cómo correr el proyecto

 1. Clonar el repositorio:
 bash  git clone https://github.com/Aramis09/technical-test--Nimble-Gravity 
 2. Instalar las dependencias:
 bash  npm install 
 3. Levantar el entorno de desarrollo:
 bash  npm run dev 

 ---

 ## 🧠 Decisiones Técnicas

 ### 📦 ¿Por qué se utilizó Next.js?

 Se utilizó Next.js por dos motivos principales:

 1. Permite crear un pequeño BFF (Backend For Frontend) utilizando las API Routes de Next, lo que facilita mapear y transformar la data proveniente del backend original antes de enviarla al cliente.
 2. Permite realizar SSR (Server-Side Rendering) en las requests del frontend, mejorando performance y experiencia de usuario.

 ---

 ### 🔄 Manejo de datos con TanStack Query

 Se utilizó TanStack Query para optimizar las requests del lado del cliente.

 Esta librería permite:

 - Realizar la request en el servidor (SSR).
 - Hidratar la data en el cliente.
 - Aprovechar cache, revalidaciones y estados de carga automáticamente.

 De esta manera se obtiene lo mejor de ambos mundos: SSR + experiencia reactiva en el cliente.

 ---

 ## 🏗 Arquitectura

 La arquitectura utilizada es orientada a features.

 Si bien puede resultar un poco exagerada para el tamaño de este proyecto, mantiene escalabilidad, orden y separación clara de responsabilidades.

 ---

 ## 🎨 UI y Estilos

 - Se utilizó shadcn/ui para acelerar el desarrollo de la interfaz y lograr un diseño más prolijo sin invertir demasiado tiempo (sí, esto fue codeado a las 5 AM 😅).
 - Se modificaron las variables de TailwindCSS para aproximar el estilo visual al de la página de Nimble Gravity.
 - Se implementó responsive design para asegurar una correcta visualización en todos los dispositivos.
 - Se agregó un Skeleton Loader para mejorar la experiencia de usuario durante los estados de carga.

 ---

 ## 📱 Experiencia de Usuario

 - Renderizado rápido gracias a SSR.
 - Hidratación optimizada con TanStack Query.
 - Estados de carga con skeleton.
 - Diseño responsive y consistente.

 ---

 ✨ El objetivo principal fue mantener buenas prácticas, performance y una estructura escalable incluso en un proyecto pequeño.

  ## 📬 Contacto

 👨‍💻 Aramis Jaime

 - GitHub: https://github.com/Aramis09

 - LinkedIn: https://www.linkedin.com/in/aramisdev

 - Email: aramisjaime48@gmail.com


 ---