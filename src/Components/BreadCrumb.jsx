import React from 'react'

const BreadCrumb = () => {
  return (
    <>
        <section class="breadcrumb-area">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="breadcrumb-item">
                    <h2 class="title">About us</h2>
                    <nav aria-label="breadcrumb">   
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">About</li>
                        </ol>
                    </nav>
                </div>  
            </div>
        </div>
    </div>
</section>
    
    </>
  )
}

export default BreadCrumb