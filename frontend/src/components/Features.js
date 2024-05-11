import React from 'react'

export default function Features() {
  return (
    <div className="container-fluid my-5">
    <div className="row">
        <div className="col-lg-4 p-0">
            <div className="box d-flex align-items-center bg-secondary text-white px-5">
                <i className="flaticon-training display-2 text-primary me-3"></i>
                <div>
                    <h2 className="text-white mb-3">Progression</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero
                    </p>
                </div>
            </div>
        </div>
        <div className="col-lg-4 p-0">
            <div className="box d-flex align-items-center bg-primary text-white px-5">
                <i className="flaticon-weightlifting display-2 text-secondary me-3"></i>
                <div>
                    <h2 className="text-white mb-3">Workout</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero
                    </p>
                </div>
            </div>
        </div>
        <div className="col-lg-4 p-0">
            <div className="box d-flex align-items-center bg-secondary text-white px-5">
                <i className="flaticon-treadmill display-2 text-primary me-3"></i>
                <div>
                    <h2 className="text-white mb-3">Nutrition</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
