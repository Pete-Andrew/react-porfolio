import React from "react";      
       
function Footer () {       
       return (
         <div>
           <footer className="footer-card text-center">
             <div className="footer-card-header">Footer</div>
             <div className="footer-card-body">
               <h5 className="footer-card-title">Special title treatment</h5>
               <p className="footer-card-text">
                 With supporting text below as a natural lead-in to additional
                 content.
               </p>
               <a href="#" className="btn btn-primary">
                 Go somewhere
               </a>
             </div>
             
             <div className="card-footer text-muted">
               <div className="footer-copyright text-center py-3">
                 © 2020 Copyright:
                 <a href="/"> MDBootstrap.com</a>
               </div>
             </div>

           </footer>

           <footer className="page-footer font-small cyan darken-3">
             <div className="container">
               <div className="row">
                 <div className="col-md-12 py-5">
                   <div className="mb-5 flex-center">
                     <a className="fb-ic">
                       <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x">
                         {" "}
                       </i>
                     </a>

                     <a className="tw-ic">
                       <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x">
                         {" "}
                       </i>
                     </a>

                     <a className="gplus-ic">
                       <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x">
                         {" "}
                       </i>
                     </a>

                     <a className="li-ic">
                       <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x">
                         {" "}
                       </i>
                     </a>

                     <a className="ins-ic">
                       <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
                         {" "}
                       </i>
                     </a>

                     <a className="pin-ic">
                       <i className="fab fa-pinterest fa-lg white-text fa-2x">
                         {" "}
                       </i>
                     </a>
                   </div>
                 </div>
               </div>
             </div>

       

           </footer>
         </div>
       );
}

export default Footer;