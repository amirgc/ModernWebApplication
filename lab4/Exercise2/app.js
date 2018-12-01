 const os = require('os');

 function checkSystem(){
     console.log("Checking your system..");
    const totalCpus = os.cpus().length;
    const totalMemory = (os.totalmem()/1000000000);
    if(totalMemory < 4){
        console.log("This app needs at least 4 GB of RAM.");

        return ;
    }

    if(totalCpus < 2){
        console.log("Processor is not supported.");

        return ;
    }
    
    console.log("System is checked successfully.")
 }
 
 checkSystem();


 // Way 2: Observable 
 const os = require('os');
 const { Observable } = require('rxjs');

 const observable$ = Observable.create((observer) =>{
    observer.next("Checking your system...");
    const totalCpus = os.cpus().length;
    const totalMemory = (os.totalmem()/1000000000);
    if(totalMemory < 4){
        observer.next("This app needs at least 4 GB of RAM");
    }else if(totalCpus < 2){
       observer.next("Processor is not supported.");
    }else{
        observer.complete();
    }


 });

 function checkSystem(){
    observable$.subscribe(
        (data) => {console.log(data)},
        (error) => console.log(error),
        () => console.log("System is checked successfully.")
    )
}
 
checkSystem();
