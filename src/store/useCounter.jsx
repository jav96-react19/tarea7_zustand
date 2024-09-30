import {create} from "zustand";
import { persist } from "zustand/middleware";


const useCounter = create(
    // Mantenemos la información del contador en el localStorage
    persist(
        (set, get) => ({
            counterId: self.crypto.randomUUID(), 
            counter: 0,
            achievementData: (step, message) => {
                return {
                    step: step,
                    message: message
                }
            },
            achievements: () => 
            {
                const counter = get().counter;
                const achievementData = get().achievementData
                
                if(counter === 0)
                {
                    const message = "🥇 ¡Regresaste a 0! siempre es un buen momento para empezar de nuevo."
                    return achievementData(counter, message);
                }
                
                else if(counter === 1)
                {
                    const message = "🥇 Primer Incremento"
                    return achievementData(counter, message);
                }
                else if(counter === 5)
                {
                    const message = "🥇 ¡Ya vas a la mitad del recorrido hacia un nuevo logro!"
                    return achievementData(counter, message);
                }
                else if(counter === 10)
                {
                    const message = "🥇 Has logrado 10 incrementos seguidos sin ninguna pausa. ¡Sigue así!"
                    return achievementData(counter, message);
                }
                else return;
            },
            increment: () => set(state => ({counter: state.counter + 1})),
            decrement: () => set(state => ({counter: state.counter < 1 ? 0 : state.counter - 1})),
    }), 
    {
        // Especificamos el nombre que queramos para el localStorage
        name: "counter-localStorage",
    }
))
export default useCounter;