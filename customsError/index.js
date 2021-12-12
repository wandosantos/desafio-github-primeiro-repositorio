
class CustomsError extends Error {
  
        constructor({message , data}){
            super(message);
            this.data = data;
        }
    }   

try{
    
    const name = 'wando'
    const myName = 'Evandro'
    name = myName
    console.log(name)
    const trataError = new CustomsError({
        message:'Customs Message erros customizados',        
        data:{
            typo:'Server error'
        }
        })
    throw trataError
}catch(err){
    if(err.data === 'Server error '){
        console.log(err.data)
    }
    //console.log('Qual e o : ', err+'!')
}finally{
    console.log('keep going')
}