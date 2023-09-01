import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
            <div class="container  align-items-end">
            
              <footer class="text-center text-white" style={{backgroundColor: "#f1f1f1;"}}>
              {/* <!-- Grid container --> */}
              <div class="container pt-8">
                {/* <!-- Section: Social media --> */}
                <section class="mb-4">
                  {/* <!-- Facebook --> */}
                  <a
                    class="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><i class="fab fa-facebook-f"></i
                  ></a>
            
                  {/* <!-- Twitter --> */}
                  <a
                    class="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><i class="fab fa-twitter"></i
                  ></a>
            
                  {/* <!-- Google --> */}
                  <a
                    class="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><i class="fab fa-google"></i
                  ></a>
            
                  {/* <!-- Instagram --> */}
                  <a
                    class="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><i class="fab fa-instagram"></i
                  ></a>
            
                  {/* <!-- Linkedin --> */}
                  <a
                    class="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="/"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><i class="fab fa-linkedin"></i
                  ></a>
                  {/* <!-- Github --> */}
                  <a
                    class="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="/"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><i class="fab fa-github"></i
                  ></a>
                </section>
                {/* <!-- Section: Social media --> */}
              </div>
              {/* <!-- Grid container --> */}
            
              {/* <!-- Copyright --> */}
              <div class="text-center text-dark p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                © 2022 Copyright:
                <a class="text-dark" href="/">INFINEWS</a>
              </div>
              {/* <!-- Copyright --> */}
            </footer>
              
            </div>
            {/* <!-- End of .container --> */}
                
            </div>
        );
    }
}

export default Footer;