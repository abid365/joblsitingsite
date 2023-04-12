import swal from "sweetalert";

const sweetAlert =()=>{
    const newLocal = 'success';
    swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
        
    })
}

export default sweetAlert;