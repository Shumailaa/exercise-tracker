import {useSnackbar} from 'notistack';


export default function usePopup(){
    const {enqueueSnackbar} = useSnackbar();

    const successMessage = (msg)=>{
        return enqueueSnackbar(msg,{variant:'success'})
    }

    const loadingMessage = ()=>{
        return enqueueSnackbar('loading...',{variant:'info'})
    }
    
    const errorMessage = (msg)=>{
        console.log("POPUP ERRROR",msg);
        return enqueueSnackbar(msg,{variant:'error'})
    }
    
    return{successMessage,errorMessage,loadingMessage}
}