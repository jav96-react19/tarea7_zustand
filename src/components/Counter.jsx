

import { motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import { Toaster } from 'sonner'
import useStore from "@/store/useCounter.jsx"
import { useShallow } from 'zustand/react/shallow'
import useAchievementMessage from '@/hooks/useAchievementMessage.jsx';

const Counter = () => 
{
    const { counterId, counter, achievements, increment, decrement } = useStore(useShallow(state => 
    ({
        counterId: state.counterId,
        counter: state.counter,
        achievements: state.achievements,
        increment: state.increment,
        decrement: state.decrement
    })));

    const achievement = achievements();

    useAchievementMessage(achievement);

    return (
        <>
            <div className="bg-white bg-opacity-20 p-8 rounded-3xl backdrop-blur-lg shadow-lg">
            <motion.div
                key={counterId}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="text-6xl font-bold text-white text-center mb-8">
                {counter}
            </motion.div>
            <div className="flex justify-center space-x-6">
                <button
                    onClick={decrement}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-6 rounded-full transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50">
                    <Minus size={24} />
                </button>
                <button
                    onClick={increment}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-full transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
                >
                    <Plus size={24} />
                </button>
            </div>
            </div>
            <Toaster position="bottom-center" richColors className="mt-0"/>
        </>
    )
}
export default Counter;