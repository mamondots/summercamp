import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


const usePasswordToggle = () => {
    const [visible, setVisible] = useState(false)
    const Icon = (

        <FontAwesomeIcon
            icon={visible ? "eye-slash" : "eye"}
            onclick={() => setVisible(visible => !visible)}
        />

    )
    const InputType = visible ? "text" : "password"
    return [InputType, Icon]
};

export default usePasswordToggle;