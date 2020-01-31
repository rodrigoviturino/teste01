menu navbar HTML
<!-- <nav class="header__rowBottom__nav col-md-8 col-2">
                    <ul class="header__rowBottom__nav__menu">
                        <li class="menu-close">
                            <i class="fas fa-times fa-2x"></i>
                        </li>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Company</a>
                        </li>
                        <li>
                            <a href="#">Cases</a>
                        </li>
                        <li>
                            <a href="#">News</a>
                        </li>
                        <li>
                            <a href="#">Pages</a>
                        </li>
                        <li>
                            <a href="#">Shop</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                    <div class="menu-burgue">
                        <i class="fas fa-th fa-2x"></i>
                    </div>
                </nav> -->

menu navbar  CSS
   // &__nav {

        //     &__menu {
        //         display: flex;
        //         margin: 0;

        //         @include media-breakpoint-only(xs) { 
        //             position: fixed;
        //             top: -10px;
        //             right: -600px;                
        //             transition: all 0.7s;
        //         }

        //         .menu-close {
        //             display: none;

        //         @include media-breakpoint-only(xs) { 
        //             display: block;
        //             position: absolute;
        //             top: 10px;
        //             right: 80px;
        //             color: #fff;
        //         }

        //         }

        //         li {
        //             a {
        //                 margin-right: 40px;
        //                 color: white;
        //                 text-transform: uppercase;
        //                 text-decoration: none;

        //                 &:hover {
        //                     color: #ccc;
        //                 }
        //             }
        //         }
        //     }

        //     .menu-burgue{
        //         display: none;
        //         @include media-breakpoint-only(xs) {
        //             display: block;
        //             opacity: 1;
        //             color: #fff;
        //             i {
        //                 cursor: pointer;
        //             }
        //         }
                
        //     }

        // }

Menu Burgue
   // .menuOpen {
    //     position: fixed;
    //     background-color: gray;
    //     top: 0px;
    //     z-index: 11;
    //     right: -63px;
    //     display: flex !important;
    //     align-items: center;
    //     flex-direction: column !important;
    //     justify-content: space-around;
    //     height: 100vh;
    //     width: 100%;

    //     .menu-burgue {
    //         display: none !important;
    //     }
    // }



    /// menu
    <div class="row align-items-center">
               
                <div class="col-md-4 col d-flex header__rowBottom__lang align-items-center justify-content-end">
                    <button class="navbar-toggler collapsed d-sm-none" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                      </button>
                    <ul class="wrapper d-flex align-items-center">
                        <li>
                            <!-- Example single danger button -->
                            <div class="btn-group">
                                <button type="button" class="btn lang"><img src="./images/icon-lang.png" alt="">USA Office</button>
                                <button type="button" class="btn  dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-reference="parent">
                                  <span class="sr-only">Toggle Dropdown</span>
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuReference">
                                  <a class="dropdown-item" href="#">Action</a>
                                  <a class="dropdown-item" href="#">Another action</a>
                                  <a class="dropdown-item" href="#">Something else here</a>
                                  <div class="dropdown-divider"></div>
                                  <a class="dropdown-item" href="#">Separated link</a>
                                </div>
                              </div>
                        </li>

                        <li class="mx-3">
                            <a href="#">
                                <i class="fas fa-shopping-cart "></i>
                            </a>
                        </li>

                        <li class="">
                            <a href="#">
                                <i class="fas fa-search "></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <nav class="navbar navbar-expand-lg col-md-8">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="#">HOME<span class="sr-only">(current)</span></a>
                            </li>                    
                            <li class="nav-item ">
                                <a class="nav-link" href="#">COMPANY <span class="sr-only">(current)</span></a>
                            </li>                    
                            <li class="nav-item ">
                                <a class="nav-link" href="#">CASES<span class="sr-only">(current)</span></a>
                            </li>                    
                            <li class="nav-item ">
                                <a class="nav-link" href="#">NEWS<span class="sr-only">(current)</span></a>
                            </li>                    
                            <li class="nav-item ">
                                <a class="nav-link" href="#">PAGES<span class="sr-only">(current)</span></a>
                            </li>                    
                            <li class="nav-item ">
                                <a class="nav-link" href="#">SHOP<span class="sr-only">(current)</span></a>
                            </li>                    
                            <li class="nav-item ">
                                <a class="nav-link" href="#">CONTACT<span class="sr-only">(current)</span></a>
                            </li>                    
                        
                        </ul>
                        
                    </div>
                </nav>

            </div>