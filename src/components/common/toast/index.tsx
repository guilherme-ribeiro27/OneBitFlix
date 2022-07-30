import {Toast, ToastBody, ToastHeader} from 'reactstrap';

interface props{
    isOpen: boolean;
    message: string;
    color: string;
}
const ToastComponent = ({isOpen, message,color}:props)=>{
    return (
        <>
            <Toast isOpen={isOpen} className={`${color} text-white fixed-top ms-auto mt-3`}>
                <ToastBody className="text-center">
                    {message}
                </ToastBody>
            </Toast>
        </>
    )
}
export default ToastComponent