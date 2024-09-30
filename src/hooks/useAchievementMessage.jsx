import {useEffect, useRef} from "react";
import { toast } from 'sonner'

const useAchievementMessage = (achievement) => 
{
    const counterStep = useRef(0);

    useEffect(() => 
    {
        const showAchievement = setTimeout(() => {
            if(counterStep.current!==achievement?.step)
            {
                counterStep.current = achievement;
                achievement?.message!==undefined && toast.info(achievement?.message);
            }
        }, 600);

        return () => clearTimeout(showAchievement)
    }, [achievement])
}
export default useAchievementMessage;