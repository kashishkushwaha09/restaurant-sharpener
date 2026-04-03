import ReactDOM from 'react-dom';

const CartModal = ({children}) => {
  return ReactDOM.createPortal(
    <div className='position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center' style={{zIndex: 999}}>
      {children}
    </div>,
    document.getElementById('overlays')
  );
};

export default CartModal;