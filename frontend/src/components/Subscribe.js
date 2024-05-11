import React from 'react'

export default function Subscribe() {
    return (
        <div className="subscribe container-fluid my-5 text-center">
            <div className="row">
                <div className="col-12">

                    <h4 className="display-4 text-white mb-3">Subscribe Our Newsletter</h4>
                    <p className="text-white mb-4">Subscribe and get Our latest article in your inbox</p>

                    <div className="input-group justify-content-center">
                        <input type="text" className="form-control-lg mb-sm-0 mb-4 rounded-0" placeholder="Your Email" />
                        <div className="input-group-append">
                            <button className="btn text-white" type="submit">Subscribe</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
