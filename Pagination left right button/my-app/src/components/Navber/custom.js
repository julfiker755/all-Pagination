
export const custom = () => {
    const [mobile,setmobile]=useState(true)
    function handlemobile(){
        setmobile(!mobile)
        document.querySelector('.navber-main-center').classList.toggle('navber-main-center-add')
        
     }
};
