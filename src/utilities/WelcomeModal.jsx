import { useState, useEffect } from "react";

const WelcomeModal = () => {
    const [show, setShow] = useState(false);
      useEffect(()=>{
        setTimeout(()=>{
            setShow(true);
          }, 3000)
      },[])
  
    return (
      <>
        {show && (
          <div className="modal fade show d-block" tabIndex="-1" onClick={() => setShow(prev=>!prev)}>
            <div className="modal-dialog text-center">
              <div className="modal-content">
                <div className="modal-header p-3">
                  <h5 className="modal-title text-center w-100">Welcome!</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShow(false)}
                  ></button>
                </div>
                <div className="modal-body alert alert-primary mb-0 pb-0">
                  <h5>We are currently working on KubeBuddy project.</h5>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
};
export default WelcomeModal;