import React from "react";
import { Button } from "shared/ui/Button/Button";



export const ErrorPage = () => {

    const reloadPage = () => {
        location.reload()
    }

    return (
        <div>
            <p>
                Произошла непредвиденная ошибка
            </p>
            <Button 
            onClick={reloadPage}
            >
                Обновить страницу
            </Button>
        </div>
    )  
}