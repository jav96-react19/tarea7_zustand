# Tarea 7 React 19 con Zustand

 ## 🔥 NOVEDADES

- Componente:

- Store: <br/>
    - **useCounter.jsx** --> Custom hook de Zustand permite: 

       - incrementar / decrementar contador
       - Mostrar mensajes de logros basandose en el valor del contador


- Hooks: <br/>
   - **useAchievementMessage.jsx** --> Custom hook que permite: 

     - Mostrar el mensaje de toast, unicamente cuando el valor referenciado del mensaje cambie al cabo de unos 600 milisegundos (0.6 segundos).

     - Permite optimización de rendimiento: 
       
       Hooks utilizados:

         - useRef --> Obtiene la referencia del logro y solo cambiará 
            cuando sea completamente distinta al nuevo valor del logro.

         - useEffect --> Actualización dinámica cuando cambie el mensaje despues de 0.6 segundos

<br/>

![alt text](/src/assets/img/task7_preview.gif)

## 📖 WIKI

Zustand: [https://zustand.docs.pmnd.rs/getting-started/introduction](https://zustand.docs.pmnd.rs/getting-started/introduction "Zustand Documentation")

Zustand destructuring: [https://github.com/pmndrs/zustand](https://github.com/pmndrs/zustand#selecting-multiple-state-slices "Zustand Destructing State Variables")






