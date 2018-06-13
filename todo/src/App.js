import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return ([
      <div id="preloader">
		<div id="loading"> </div>
	</div>
	/* <header> */
		<nav id="mainNav" className="navbar navbar-inverse navbar-default navbar-fixed-top">
			<div className="container">
				<div className="navbar-header">
					<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<a className="navbar-brand" href="#">
						<img src="assets/images/logo.png" alt="logo"/>
					</a>
				</div>

				{/* <!-- Collect the nav links, forms, and other content for toggling --> */}
				<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1" data-hover="dropdown" data-animations="fadeIn fadeInLeft fadeInUp fadeInRight">
					<ul className="nav navbar-nav">
						<li className="dropdown">
							<a href="index-2.html" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
								<span>Home</span>
							</a>
							<ul className="dropdown-menu dropdownhover-bottom" role="menu">
								<li>
									<a href="index-2.html">Home pages 1</a>
								</li>
								<li>
									<a href="index2.html">Home pages 2</a>
								</li>
								<li>
									<a href="index3.html">Home pages 3</a>
								</li>
								<li>
									<a href="index4.html">Home pages 4</a>
								</li>
							</ul>
						</li>
						<li className="dropdown">
							<a href="list.html" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
								<span> Shop</span>
							</a>
							<div className="dropdown-menu dropdownhover-bottom mega-menu" role="menu">
								<div className="col-sm-8 col-md-8">
									<ul>
										<li>
											<strong>Shop Pages</strong>
										</li>
										<li>
											<a href="#">Standard Shop Page</a>
										</li>
										<li>
											<a href="#">Small Products</a>
										</li>
										<li>
											<a href="#">Medium Products</a>
										</li>
										<li>
											<a href="#">Large Products</a>
										</li>
										<li>
											<a href="#">Sidebar</a>
										</li>
										<li>
											<a href="#">Pagination</a>
										</li>
										<li>
											<a href="#">Shop Infinity</a>
										</li>
									</ul>
									<ul>
										<li>
											<strong>Products Pages</strong>
										</li>
										<li>
											<a href="#">Product Page V1</a>
										</li>
										<li>
											<a href="#">Product Page V2</a>
										</li>
										<li>
											<a href="#">Product Page V3</a>
										</li>
										<li>
											<a href="#">Product Page V4</a>
										</li>
										<li>
											<a href="#">Simple Product</a>
										</li>
										<li>
											<a href="#">Variable Product</a>
										</li>
										<li>
											<a href="#">External Product</a>
										</li>
									</ul>
									<ul>
										<li>
											<strong>Other Shop Pages</strong>
										</li>
										<li>
											<a href="#">Collection</a>
										</li>
										<li>
											<a href="#">LookBook</a>
										</li>
										<li>
											<a href="#">Shopping Cart</a>
										</li>
										<li>
											<a href="#">Wishlist</a>
										</li>
										<li>
											<a href="#">Order Tracking</a>
										</li>
										<li>
											<a href="#">My Account</a>
										</li>
										<li>
											<a href="#">Checkout</a>
										</li>
									</ul>
								</div>
								<div className="col-sm-4 col-md-4">
									<img src="assets/images/Hover-menu-img.jpg" alt="Hover-menu-img"/> </div>
							
							</div>
						</li>
						<li>
							<a href="#" className="dropdown-toggle">
								<span>About</span>
							</a>
						</li>
						<li className="dropdown">
							<a href="blog.html" data-toggle="dropdown" role="button" aria-expanded="false">
								<span>Blog</span>
							</a>
							<ul className="dropdown-menu dropdownhover-bottom" role="menu">
								<li>
									<a href="blog.html">Blog</a>
								</li>
								<li>
									<a href="blog-columm3-masonry.html">Blog Columm 3 Masonry</a>
								</li>
								<li>
									<a href="blog-filter-2-columns.html">Blog Filter 2 Columns</a>
								</li>
								<li>
									<a href="blog-filter-3-columns.html">Blog Filter 3 Columns</a>
								</li>
								<li>
									<a href="blog-details.html">Blog Details</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="contact.html">
								<span>Contact</span>
							</a>
						</li>
						<li className="dropdown">
							<a href="gridfull.html" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
								<span>Elements</span>
							</a>
							<ul className="dropdown-menu dropdownhover-bottom" role="menu">
								<li>
									<a href="list.html">Shop List</a>
								</li>
								<li>
									<a href="grid-3-columns.html">Shop Grid 3 Columns</a>
								</li>
								<li>
									<a href="grid-4-columns.html">Shop Grid 4 Columns</a>
								</li>
								<li>
									<a href="grid-sidebar-left.html">Shop Grid Sidebar Left</a>
								</li>
								<li>
									<a href="products-detail.html">Products Detail</a>
								</li>
								<li>
									<a href="products-detail02.html">Products Detail 02</a>
								</li>
							</ul>
						</li>
					</ul>
					<ul className="nav navbar-nav navbar-right">
						<li>
							<a href="#" data-toggle="modal" data-target=".popup1">
								<img src="assets/images/top-icon1.png" alt="top-icon1"/>
								<span>Search</span>
							</a>
						</li>
						<li className="dropdown">
							<a href="#" className="dropbtn">
								<img src="assets/images/top-icon3.png" alt="top-ico3"/>
								<span>Cart (0)</span>
							</a>
							<div className="dropdown-content">
								<div className="cart-content">
									<div className="col-sm-4 col-md-4">
										<img src="assets/images/Products/13.jpg" alt="13"/>
									</div>
									<div className="col-sm-8 col-md-8">
										<div className="pro-text">
											<a href="#">Pellentesque Habitant</a>
											<div className="close">x</div>
											<strong>$160.00</strong>
										</div>
									</div>
								</div>
								<div className="cart-content">
									<div className="col-sm-4 col-md-4">
										<img src="assets/images/Products/11.jpg" alt="13"/>
									</div>
									<div className="col-sm-8 col-md-8">
										<div className="pro-text">
											<a href="#">Pellentesque Habitant</a>
											<div className="close">x</div>
											<strong>$160.00</strong>
										</div>
									</div>
								</div>
								<div className="total">
									<div className="col-sm-6 col-md-6 text-left">
										<span>Shipping :</span>
										<br/>
										<strong>Total :</strong>
									</div>
									<div className="col-sm-6 col-md-6 text-right">
										<strong>$0.00</strong>
										<br/>
										<strong>$160.00</strong>
									</div>
								</div>
								<a href="shopping-cart.html" className="cart-btn">VIEW CART </a>
								<a href="checkout.html" className="cart-btn">CHECKOUT</a>
							</div>
						</li>
						<li>
							<a href="#" data-toggle="modal" data-target=".menu-popup">
								<img src="assets/images/top-icon2.png" alt="top-icon2"/>
							</a>
						</li>
					</ul>
					{/* <!-- /.navbar-collapse --> */}
				</div>
			</div>
		</nav>
		{/* <!--  /nav  --> */}
		{/* <!-- search-popup --> */}
		<div className="modal fade bs-example-modal-lg search-bg popup1" tabindex="-1" role="dialog">
			<div className="modal-dialog modal-lg" role="document">
				<div className="modal-content search-popup">
					<div className="text-center">
						<a href="#" className="close2" data-dismiss="modal" aria-label="Close">× close</a>
					</div>
					<div className="search-outer">
						<div className="col-md-11">
							<input type="text" placeholder="Search for products..." />
						</div>
						<div className="col-md-1 text-right">
							<a href="#">
								<i className="fa fa-search" aria-hidden="true"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* <!-- /search-popup --> */}
		{/* <!--  .menu  --> */}
		<div className="modal fade bs-example-modal-lg search-bg menu-popup" tabindex="-1" role="dialog">
			<div className="modal-dialog modal-lg" role="document">
				<div className="modal-content search-popup">
					<nav className="navbar navbar-inverse openmenu">
						<ul className="nav navbar-nav">
							<li className="dropdown">
								<a href="index-2.html" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
									<span>Home</span>
								</a>
								<ul className="dropdown-menu dropdownhover-bottom" role="menu">
									<li>
										<a href="index-2.html">Home pages 1</a>
									</li>
									<li>
										<a href="index2.html">Home pages 2</a>
									</li>
									<li>
										<a href="index3.html">Home pages 3</a>
									</li>
									<li>
										<a href="index4.html">Home pages 4</a>
									</li>
								</ul>
							</li>
							<li className="dropdown">
								<a href="list.html" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
									<span> Shop</span>
								</a>
								<div className="dropdown-menu dropdownhover-bottom mega-menu" role="menu">
									<div className="col-sm-8 col-md-8">
										<ul>
											<li>
												<strong>Shop Pages</strong>
											</li>
											<li>
												<a href="#">Standard Shop Page</a>
											</li>
											<li>
												<a href="#">Small Products</a>
											</li>
											<li>
												<a href="#">Medium Products</a>
											</li>
											<li>
												<a href="#">Large Products</a>
											</li>
											<li>
												<a href="#">Sidebar</a>
											</li>
											<li>
												<a href="#">Pagination</a>
											</li>
											<li>
												<a href="#">Shop Infinity</a>
											</li>
										</ul>
										<ul>
											<li>
												<strong>Products Pages</strong>
											</li>
											<li>
												<a href="#">Product Page V1</a>
											</li>
											<li>
												<a href="#">Product Page V2</a>
											</li>
											<li>
												<a href="#">Product Page V3</a>
											</li>
											<li>
												<a href="#">Product Page V4</a>
											</li>
											<li>
												<a href="#">Simple Product</a>
											</li>
											<li>
												<a href="#">Variable Product</a>
											</li>
											<li>
												<a href="#">External Product</a>
											</li>
										</ul>
										<ul>
											<li>
												<strong>Other Shop Pages</strong>
											</li>
											<li>
												<a href="#">Collection</a>
											</li>
											<li>
												<a href="#">LookBook</a>
											</li>
											<li>
												<a href="#">Shopping Cart</a>
											</li>
											<li>
												<a href="#">Wishlist</a>
											</li>
											<li>
												<a href="#">Order Tracking</a>
											</li>
											<li>
												<a href="#">My Account</a>
											</li>
											<li>
												<a href="#">Checkout</a>
											</li>
										</ul>
									</div>
									<div className="col-sm-4 col-md-4">
										<img src="assets/images/Hover-menu-img.jpg" alt="Hover-menu-img"/> </div>
								</div>
							</li>
							<li>
								<a href="#" className="dropdown-toggle">
									<span>About</span>
								</a>
							</li>
							<li className="dropdown">
								<a href="blog.html" data-toggle="dropdown" role="button" aria-expanded="false">
									<span>Blog</span>
								</a>
								<ul className="dropdown-menu dropdownhover-bottom" role="menu">
									<li>
										<a href="blog.html">Blog</a>
									</li>
									<li>
										<a href="blog-columm3-masonry.html">Blog Columm 3 Masonry</a>
									</li>
									<li>
										<a href="blog-filter-2-columns.html">Blog Filter 2 Columns</a>
									</li>
									<li>
										<a href="blog-filter-3-columns.html">Blog Filter 3 Columns</a>
									</li>
									<li>
										<a href="blog-details.html">Blog Details</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="contact.html">
									<span>Contact</span>
								</a>
							</li>
							<li className="dropdown">
								<a href="gridfull.html" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
									<span>Elements</span>
								</a>
								<ul className="dropdown-menu dropdownhover-bottom" role="menu">
									<li>
										<a href="list.html">Shop List</a>
									</li>
									<li>
										<a href="grid-3-columns.html">Shop Grid 3 Columns</a>
									</li>
									<li>
										<a href="grid-4-columns.html">Shop Grid 4 Columns</a>
									</li>
									<li>
										<a href="grid-sidebar-left.html">Shop Grid Sidebar Left</a>
									</li>
									<li>
										<a href="products-detail.html">Products Detail</a>
									</li>
									<li>
										<a href="products-detail02.html">Products Detail 02</a>
									</li>
								</ul>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
		{/* <!--  /.menu  --> */}
		<div id="home-slider" className="carousel slide carousel-fade" data-ride="carousel">
			{/* <!-- .home-slider --> */}
			<div className="carousel-inner">
				<div className="item active" style="background-image: url(assets/images/header-1.jpg);  background-repeat: no-repeat; background-position: top;">
					<div className="caption">
						<h2 className="animated wow zoomIn" data-wow-duration=".5s" data-wow-delay=".2s">Handmade
							<br/> Hand Carved Coffee</h2>
						<p className="animated wow fadeIn" data-wow-duration=".2s" data-wow-delay=".1s">As rich and unique as the coffee beans it is intended for, this little scoop will make your morning ritual a special
							occasion every day. </p>
						<a data-scroll className="btn get-start animated fadeInUpBig" href="#">
							<span>view collection</span>
						</a>
					</div>
				</div>
				<div className="item" style="background-image: url(assets/images/header-2.jpg);  background-repeat: no-repeat; background-position: top;">
					<div className="caption">
						<h2 className="animated wow zoomIn" data-wow-duration=".5s" data-wow-delay=".2s">Handmade
							<br> Hand Carved Coffee</br></h2>
						<p className="animated wow fadeIn" data-wow-duration=".2s" data-wow-delay=".1s">As rich and unique as the coffee beans it is intended for, this little scoop will make your morning ritual a special
							occasion every day. </p>
						<a data-scroll className="btn get-start animated fadeInUpBig" href="#">
							<span>view collection</span>
						</a>
					</div>
				</div>
				<div className="item" style="background-image: url(assets/images/header-3.jpg);  background-repeat: no-repeat; background-position: top;">
					<div className="caption">
						<h2 className="animated wow zoomIn" data-wow-duration=".5s" data-wow-delay=".2s">Handmade
							<br> Hand Carved Coffee</br></h2>
						<p className="animated wow fadeIn" data-wow-duration=".2s" data-wow-delay=".1s">As rich and unique as the coffee beans it is intended for, this little scoop will make your morning ritual a special
							occasion every day. </p>
						<a data-scroll className="btn get-start animated fadeInUpBig" href="#">
							<span>view collection</span>
						</a>
					</div>
				</div>
				 {/* indicators */}
				<ol className="carousel-indicators">
					<li data-target="#home-slider" data-slide-to="0" className="active"></li>
					<li data-target="#home-slider" data-slide-to="1" className=""></li>
					<li data-target="#home-slider" data-slide-to="2" className=""></li>
				</ol>
				{/* <!-- /indicators --> */}
			</div>
			{/* <!-- /.home-slider --> */}
		</div>
	// </header>
	<section className="banner-outer">
		{/* <!-- .banner-outer --> */}
		<div className="container">
			{/* <!-- .banner-bg --> */}
			<div className="banner-bg">
				<div className="col-sm-4 col-md-4">
					{/* <!-- .banner-img --> */}
					<div className="banner-img animated wow zoomIn" data-wow-duration=".5s" data-wow-delay=".2s">
						<img src="assets/images/banner1.jpg" alt="about-img1" />
						<div className="banner-text">
							<h3>British Made Pocket Knife - Oak</h3>
							<p>
								<a href="#">Discover Now</a>
							</p>
						</div>
					</div>
					{/* <!-- /.banner-outer --> */}
				</div>
				<div className="col-sm-4 col-md-4">
					{/* <!-- .banner-img --> */}
					<div className="banner-img animated wow zoomIn" data-wow-duration=".5s" data-wow-delay=".2s">
						<img src="assets/images/banner2.jpg" alt="about-img1" />
						<div className="banner-text">
							<h3>Chair Kimi No Isu Project</h3>
							<p>
								<a href="#">Discover Now</a>
							</p>
						</div>
					</div>
					{/* <!-- /.banner-outer --> */}
				</div>
				<div className="col-sm-4 col-md-4 animated wow zoomIn" data-wow-duration=".5s" data-wow-delay=".2s">
					{/* <!-- .banner-img --> */}
					<div className="banner-img">
						<img src="assets/images/banner3.jpg" alt="about-img1" />
						<div className="banner-text">
							<h3>Merino Lambswool Scarf Moss</h3>
							<p>
								<a href="#">Discover Now</a>
							</p>
						</div>
					</div>
					{/* <!-- /.banner-outer --> */}
				</div>
			</div>
			{/* <!-- /.banner-bg --> */}
		</div>
		{/* <!-- /.banner --> */}
	</section>
	<section className="new-arrivals">
		{/* <!-- .new-arrivals --> */}
		<div className="container">
			<div className="tittle text-center">
				<h2>Trending Products</h2>
				<p>Mirum est notare quam littera gothica quam nunc putamus parum claram!</p>
			</div>
			<div className="row animated wow zoomIn" data-wow-duration=".5s" data-wow-delay=".2s">
				<div className="col-md-3">
					{/* <!-- .pro-text --> */}
					<div className="pro-text">
						{/* <!-- .pro-img --> */}
						<div className="pro-img">
							<img src="assets/images/Products/21.jpg" alt="2" />
							{/* <!-- .hover-img --> */}
							<div className="hover-img">
								<ul>
									<li>
										<a href="#">
											<i className="fa fa-heart-o" aria-hidden="true"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fa fa-sliders" aria-hidden="true"></i>
										</a>
									</li>
									<li>
										<a href="#" data-toggle="modal" data-target="#quickModal" data-whatever="@mdo">
											<i className="fa fa-search" aria-hidden="true"></i>
										</a>
									</li>
								</ul>
							</div>
							{/* <!-- /.hover-img --> */}
						</div>
						{/* <!-- /.pro-img --> */}
						<a href="#">Wooden container Bowl</a>
						<a href="#" className="addtocart">+ Add to cart</a>
						<div className="price">$160.00</div>
					</div>
					{/* <!-- /.pro-text --> */}
				</div>
				<div className="col-md-3">
					{/* <!-- .pro-text --> */}
					<div className="pro-text">
						{/* <!-- .pro-img --> */}
						<div className="pro-img">
							<img src="assets/images/Products/26.jpg" alt="2" />
							{/* <!-- .hover-img --> */}
							<div className="hover-img">
								<ul>
									<li>
										<a href="#">
											<i className="fa fa-heart-o" aria-hidden="true"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fa fa-sliders" aria-hidden="true"></i>
										</a>
									</li>
									<li>
										<a href="#" data-toggle="modal" data-target="#quickModal" data-whatever="@mdo">
											<i className="fa fa-search" aria-hidden="true"></i>
										</a>
									</li>
								</ul>
							</div>
							<div className="new tage">
								<span className="new-text">NEW</span>
								<span className="pres-text">-15%</span>
							</div>
							{/* <!-- /.hover-img --> */}
						</div>
						{/* <!-- /.pro-img --> */}
						<a href="#">Wooden container Bowl</a>
						<a href="#" className="addtocart">+ Add to cart</a>
						<div className="price">$160.00</div>
					</div>
					{/* <!-- /.pro-text --> */}
				</div>
				<div className="col-md-3">
					{/* <!-- .pro-text --> */}
					<div className="pro-text">
						{/* <!-- .pro-img --> */}
						<div className="pro-img">
							<img src="assets/images/Products/24.jpg" alt="2" />
							{/* <!-- .hover-img --> */}
							<div className="hover-img">
								<ul>
									<li>
										<a href="#">
											<i className="fa fa-heart-o" aria-hidden="true"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fa fa-sliders" aria-hidden="true"></i>
										</a>
									</li>
									<li>
										<a href="#" data-toggle="modal" data-target="#quickModal" data-whatever="@mdo">
											<i className="fa fa-search" aria-hidden="true"></i>
										</a>
									</li>
								</ul>
							</div>
							{/* <!-- /.hover-img --> */}
						</div>
						{/* <!-- /.pro-img --> */}
						<a href="#">Wooden container Bowl</a>
						<a href="#" className="addtocart">+ Add to cart</a>
						<div className="price">$160.00</div>
					</div>
					{/* <!-- /.pro-text --> */}
				</div>
				<div className="col-md-3">
					{/* <!-- .pro-text --> */}
					<div className="pro-text">
						{/* <!-- .pro-img --> */}
						<div className="pro-img">
							<img src="assets/images/Products/17.jpg" alt="2" />
							{/* <!-- .hover-img --> */}
							<div className="hover-img">
								<ul>
									<li>
										<a href="#">
											<i className="fa fa-heart-o" aria-hidden="true"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fa fa-sliders" aria-hidden="true"></i>
										</a>
									</li>
									<li>
										<a href="#" data-toggle="modal" data-target="#quickModal" data-whatever="@mdo">
											<i className="fa fa-search" aria-hidden="true"></i>
										</a>
									</li>
								</ul>
							</div>
							<div className="new tage">
								<span className="new-text">NEW</span>
								<span className="pres-text">-15%</span>
							</div>
							{/* <!-- /.hover-img --> */}
						</div>
						{/* <!-- /.pro-img --> */}
						<a href="#">Wooden container Bowl</a>
						<a href="#" className="addtocart">+ Add to cart</a>
						<div className="price">$160.00</div>
					</div>
					{/* <!-- /.pro-text --> */}
				</div>
				<div className="col-md-3">
					{/* <!-- .pro-text --> */}
					<div className="pro-text">
						{/* <!-- .pro-img --> */}
						<div className="pro-img">
							<img src="assets/images/Products/22.jpg" alt="2" />
							{/* <!-- .hover-img --> */}
							<div className="hover-img">
								<ul>
									<li>
										<a href="#">
											<i className="fa fa-heart-o" aria-hidden="true"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fa fa-sliders" aria-hidden="true"></i>
										</a>
									</li>
									<li>
										<a href="#" data-toggle="modal" data-target="#quickModal" data-whatever="@mdo">
											<i className="fa fa-search" aria-hidden="true"></i>
										</a>
									</li>
								</ul>
							</div>
							<div className="new tage">
								<span className="new-text">NEW</span>
								<span className="pres-text">-15%</span>
							</div>
							{/* <!-- /.hover-img --> */}
						</div>
						{/* <!-- /.pro-img --> */}
						<a href="#">Wooden container Bowl</a>
						<a href="#" className="addtocart">+ Add to cart</a>
						<div className="price">$160.00</div>
					</div>
					{/* <!-- /.pro-text --> */}
				</div>
				<div className="col-md-3">
					{/* <!-- .pro-text --> */}
					<div className="pro-text">
						{/* <!-- .pro-img --> */}
						<div className="pro-img">
							<img src="assets/images/Products/7.jpg" alt="2" />
							{/* <!-- .hover-img --> */}
							<div className="hover-img">
								<ul>
									<li>
										<a href="#">
											<i className="fa fa-heart-o" aria-hidden="true"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fa fa-sliders" aria-hidden="true"></i>
										</a>
									</li>
									<li>
										<a href="#" data-toggle="modal" data-target="#quickModal" data-whatever="@mdo">
											<i className="fa fa-search" aria-hidden="true"></i>
										</a>
									</li>
								</ul>
							</div>
							{/* <!-- /.hover-img --> */}
						</div>
						{/* <!-- /.pro-img --> */}
						<a href="#">Wooden container Bowl</a>
						<a href="#" className="addtocart">+ Add to cart</a>
						<div className="price">$160.00</div>
					</div>
					{/* <!-- /.pro-text --> */}
				</div>
				<div className="col-md-3">
					{/* <!-- .pro-text --> */}
					<div className="pro-text">
						{/* <!-- .pro-img --> */}
						<div className="pro-img">
							<img src="assets/images/Products/19.jpg" alt="2" />
							{/* <!-- .hover-img --> */}
							<div className="hover-img">
								<ul>
									<li>
										<a href="#">
											<i className="fa fa-heart-o" aria-hidden="true"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fa fa-sliders" aria-hidden="true"></i>
										</a>
									</li>
									<li>
										<a href="#" data-toggle="modal" data-target="#quickModal" data-whatever="@mdo">
											<i className="fa fa-search" aria-hidden="true"></i>
										</a>
									</li>
								</ul>
							</div>
							<div className="new tage">
								<span className="new-text">NEW</span>
								<span className="pres-text">-15%</span>
							</div>
							{/* <!-- /.hover-img --> */}
						</div>
						{/* <!-- /.pro-img --> */}
						<a href="#">Wooden container Bowl</a>
						<a href="#" className="addtocart">+ Add to cart</a>
						<div className="price">$160.00</div>
					</div>
					{/* <!-- /.pro-text --> */}
				</div>
				<div className="col-md-3">
					{/* <!-- .pro-text --> */}
					<div className="pro-text">
						{/* <!-- .pro-img --> */}
						<div className="pro-img">
							<img src="assets/images/Products/6.jpg" alt="2" />
							{/* <!-- .hover-img --> */}
							<div className="hover-img">
								<ul>
									<li>
										<a href="#">
											<i className="fa fa-heart-o" aria-hidden="true"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fa fa-sliders" aria-hidden="true"></i>
										</a>
									</li>
									<li>
										<a href="#" data-toggle="modal" data-target="#quickModal" data-whatever="@mdo">
											<i className="fa fa-search" aria-hidden="true"></i>
										</a>
									</li>
								</ul>
							</div>
							<div className="discount tage">
								<span className="discount-text">-15%</span>
							</div>
							{/* <!-- /.hover-img --> */}
						</div>
						{/* <!-- /.pro-img --> */}
						<a href="#">Wooden container Bowl</a>
						<a href="#" className="addtocart">+ Add to cart</a>
						<div className="price">$160.00</div>
					</div>
					{/* <!-- /.pro-text --> */}
				</div>
				<div className="col-md-12 text-center">
					<a href="#" className="lbtn">load more</a>
				</div>
			</div>
		</div>
		{/* <!-- /.new-arrivals --> */}
	</section>
	<section className="banner-outer">
		{/* <!-- .banner-outer --> */}
		<div className="col-sm-6 col-md-6">
			{/* <!-- .banner-img --> */}
			<div className="banner-img">
				<img src="assets/images/bg-banner.jpg" alt="about-img1" />
				<div className="banner-text2">
					<h4>Products Essentials</h4>
					<h3>Bottle With Wooden Cork</h3>
					<p>The Newtown sofa range is the first product Jonas Wagell has designed for Zaozuo, but one of the last to be finalized
						and launched.</p>
					<p>
						<a href="#">Buy now /
							<span>$196.98</span>
						</a>
					</p>
				</div>
			</div>
			{/* <!-- /.banner-outer --> */}
		</div>

		<div className="col-sm-6 col-md-6">
			{/* <!-- .banner-img --> */}
			<div className="banner-img">
				<img src="assets/images/bg-banner2.jpg" alt="about-img1" />
				<div className="banner-text2">
					<h4>Products Essentials</h4>
					<h3>Hauteville Plywood Chair</h3>
					<p>The Newtown sofa range is the first product Jonas Wagell has designed for Zaozuo, but one of the last to be finalized
						and launched.</p>
					<p>
						<a href="#">Buy now /
							<span>$196.98</span>
						</a>
					</p>
				</div>
			</div>
			{/* <!-- /.banner-outer --> */}
		</div>
		{/* <!-- /.banner --> */}
	</section>
	<section className="new-arrivals">
		{/* <!-- .new-arrivals --> */}
		<div className="container">
			<div className="tittle text-center">
				<h2>Sale Off</h2>
				<p>Mirum est notare quam littera gothica quam nunc putamus parum claram!</p>
			</div>
			<div className="row animated wow zoomIn" data-wow-duration=".5s" data-wow-delay=".2s">
				<div className="col-5">
					{/* <!-- .pro-text --> */}
					<div className="pro-text">
						{/* <!-- .pro-img --> */}
						<div className="pro-img">
							<img src="assets/images/Products/21.jpg" alt="2" />
							{/* <!-- .hover-img --> */}
							<div className="hover-img">
								<ul>
									<li>
										<a href="#">
											<i className="fa fa-heart-o" aria-hidden="true"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fa fa-sliders" aria-hidden="true"></i>
										</a>
									</li>
									<li>
										<a href="#" data-toggle="modal" data-target="#quickModal" data-whatever="@mdo">
											<i className="fa fa-search" aria-hidden="true"></i>
										</a>
									</li>
								</ul>
							</div>
							<div className="new tage">
								<span className="new-text">NEW</span>
								<span className="pres-text">-15%</span>
							</div>
							{/* <!-- /.hover-img --> */}
						</div>
						{/* <!-- /.pro-img --> */}
						<a href="#">Wooden container Bowl</a>
						<a href="#" className="addtocart">+ Add to cart</a>
						<div className="price">$160.00
							<span>200</span>
						</div>
					</div>
					{/* <!-- /.pro-text --> */}
				</div>
				<div className="col-5">
					{/* <!-- .pro-text --> */}
					<div className="pro-text">
						{/* <!-- .pro-img --> */}
						<div className="pro-img">
							<img src="assets/images/Products/26.jpg" alt="2" />
							{/* <!-- .hover-img --> */}
							<div className="hover-img">
								<ul>
									<li>
										<a href="#">
											<i className="fa fa-heart-o" aria-hidden="true"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fa fa-sliders" aria-hidden="true"></i>
										</a>
									</li>
									<li>
										<a href="#" data-toggle="modal" data-target="#quickModal" data-whatever="@mdo">
											<i className="fa fa-search" aria-hidden="true"></i>
										</a>
									</li>
								</ul>
							</div>
							<div className="discount tage">
								<span className="discount-text">-15%</span>
							</div>
							{/* <!-- /.hover-img --> */}
						</div>
						{/* <!-- /.pro-img --> */}
						<a href="#">Wooden container Bowl</a>
						<a href="#" className="addtocart">+ Add to cart</a>
						<div className="price">$160.00
							<span></span>
						</div>
					</div>
					{/* <!-- /.pro-text --> */}
				</div>
				<div className="col-5">
					{/* <!-- .pro-text --> */}
					<div className="pro-text">
						{/* <!-- .pro-img --> */}
						<div className="pro-img">
							<img src="assets/images/Products/24.jpg" alt="2" />
							{/* <!-- .hover-img --> */}
							<div className="hover-img">
								<ul>
									<li>
										<a href="#">
											<i className="fa fa-heart-o" aria-hidden="true"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fa fa-sliders" aria-hidden="true"></i>
										</a>
									</li>
									<li>
										<a href="#" data-toggle="modal" data-target="#quickModal" data-whatever="@mdo">
											<i className="fa fa-search" aria-hidden="true"></i>
										</a>
									</li>
								</ul>
							</div>
							<div className="new tage">
								<span className="new-text">NEW</span>
								<span className="pres-text">-15%</span>
							</div>

							{/* <!-- /.hover-img --> */}
						</div>
						{/* <!-- /.pro-img --> */}
						<a href="#">Wooden container Bowl</a>
						<a href="#" className="addtocart">+ Add to cart</a>
						<div className="price">$160.00
							<span>200</span>
						</div>
					</div>
					{/* <!-- /.pro-text --> */}
				</div>
				<div className="col-5">
					{/* <!-- .pro-text --> */}
					<div className="pro-text">
						{/* <!-- .pro-img --> */}
						<div className="pro-img">
							<img src="assets/images/Products/17.jpg" alt="2" />
							{/* <!-- .hover-img --> */}
							<div className="hover-img">
								<ul>
									<li>
										<a href="#">
											<i className="fa fa-heart-o" aria-hidden="true"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fa fa-sliders" aria-hidden="true"></i>
										</a>
									</li>
									<li>
										<a href="#" data-toggle="modal" data-target="#quickModal" data-whatever="@mdo">
											<i className="fa fa-search" aria-hidden="true"></i>
										</a>
									</li>
								</ul>
							</div>
							<div className="discount tage">
								<span className="discount-text">-15%</span>
							</div>
							{/* <!-- /.hover-img --> */}
						</div>
						{/* <!-- /.pro-img --> */}
						<a href="#">Wooden container Bowl</a>
						<a href="#" className="addtocart">+ Add to cart</a>
						<div className="price">$160.00</div>
					</div>
					{/* <!-- /.pro-text --> */}
				</div>
				<div className="col-5">
					{/* <!-- .pro-text --> */}
					<div className="pro-text">
						{/* <!-- .pro-img --> */}
						<div className="pro-img">
							<img src="assets/images/Products/22.jpg" alt="2" />
							{/* <!-- .hover-img --> */}
							<div className="hover-img">
								<ul>
									<li>
										<a href="#">
											<i className="fa fa-heart-o" aria-hidden="true"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fa fa-sliders" aria-hidden="true"></i>
										</a>
									</li>
									<li>
										<a href="#" data-toggle="modal" data-target="#quickModal" data-whatever="@mdo">
											<i className="fa fa-search" aria-hidden="true"></i>
										</a>
									</li>
								</ul>
							</div>
							<div className="new tage">
								<span className="new-text">NEW</span>
								<span className="pres-text">-15%</span>
							</div>
							{/* <!-- /.hover-img --> */}
						</div>
						{/* <!-- /.pro-img --> */}
						<a href="#">Wooden container Bowl</a>
						<a href="#" className="addtocart">+ Add to cart</a>
						<div className="price">$160.00</div>
					</div>
					{/* <!-- /.pro-text --> */}
				</div>

			</div>
		</div>
		{/* <!-- /.new-arrivals --> */}
	</section>
	<section className="client-icon">
		<div className="container">
			<ul>
				<li>
					<a href="#">
						<img src="assets/images/client-logo1.png" alt="client-logo1" />
					</a>
				</li>
				<li>
					<a href="#">
						<img src="assets/images/client-logo2.png" alt="client-logo2" />
					</a>
				</li>
				<li>
					<a href="#" className="active">
						<img src="assets/images/client-logo3.png" alt="client-logo3" />
					</a>
				</li>
				<li>
					<a href="#">
						<img src="assets/images/client-logo4.png" alt="client-logo4" />
					</a>
				</li>
				<li>
					<a href="#">
						<img src="assets/images/client-logo5.png" alt="client-logo4" />
					</a>
				</li>
			</ul>
		</div>
	</section>

	<section className="section-padding">
		{/* <!-- Latest News --> */}
		<div className="container">
			<div className="tittle text-center">
				<h2>Our Blog Posts</h2>
				<p>Mirum est notare quam littera gothica quam nunc putamus parum claram!</p>
			</div>
			<div className="col-sm-4 col-md-4 wow fadeIn" data-wow-duration=".2s" data-wow-delay=".1s">
				<div className="news-box">
					<div className="news-img">
						<img src="assets/images/blog-img1.jpg" alt="news-img1" />
					</div>
					<div className="news-text">
						<a href="#">Anteposuerit litterarum formas.</a>
						<p>By
							<span>Zcubedesign</span> / September 11, 2017</p>
						<div className="news-text-content"> Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum. </div>
						<a href="#"
						 className="readbtn">Read More</a>
					</div>
				</div>
			</div>
			<div className="col-sm-4 col-md-4 wow fadeIn" data-wow-duration=".2s" data-wow-delay=".1s">
				<div className="news-box">
					<div className="news-img">
						<img src="assets/images/blog-img2.jpg" alt="news-img1" />
					</div>
					<div className="news-text">
						<a href="#">Anteposuerit litterarum formas.</a>
						<p>By
							<span>Zcubedesign</span> / September 11, 2017</p>
						<div className="news-text-content"> Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum. </div>
						<a href="#"
						 className="readbtn">Read More</a>
					</div>
				</div>
			</div>
			<div className="col-sm-4 col-md-4 wow fadeIn" data-wow-duration=".4s" data-wow-delay=".3s">
				<div className="news-box">
					<div className="news-img">
						<img src="assets/images/blog-img3.jpg" alt="news-img1" />
					</div>
					<div className="news-text">
						<a href="#">Anteposuerit litterarum formas.</a>
						<p>By
							<span>Zcubedesign</span> / September 11, 2017</p>
						<div className="news-text-content"> Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum. </div>
						<a href="#"
						 className="readbtn">Read More</a>
					</div>
				</div>
			</div>
		</div>
		{/* <!-- /Latest News --> */}
	</section>
	<section className="subscribe text-center">
		{/* <!-- .subscribe --> */}
		<div className="container">
			<h2>Get Discount Info</h2>
			<p>ubscribe to the Outstock mailing list to receive updates on new arrivals, special offers and
				<br/> other discount information.</p>
			<input type="text" placeholder="Subscribe to our newsletter..."></input>
			<input type="button" value="Subscribe"></input>
		</div>
		{/* <!-- /.subscribe --> */}
	</section>
	<footer>
		<div className="container">
			<div className="row">
				<div className="col-xs-12 col-sm-6 col-md-6">
					{/* <!-- f-weghit --> */}
					<div className="f-weghit">
						<img src="assets/images/flogo.png" alt="logo"/>
						<p>Outstock is a premium Templates theme with advanced admin module. It’s extremely customizable, easy to use and fully
							responsive and retina ready.</p>
						<ul>
							<li>
								<i className="icon-location-pin icons" aria-hidden="true"></i>
								<strong>Add:</strong> 1234 Heaven Stress, Beverly Hill, Melbourne, USA.</li>
							<li>
								<i className="icon-envelope-letter icons"></i>
								<strong>Email:</strong> contact@example.com</li>
							<li>
								<i className="icon-call-in icons"></i>
								<strong>Phone Number:</strong> (800) 123 456 789</li>
						</ul>
					</div>
					{/* <!-- /f-weghit --> */}
				</div>
				<div className="col-xs-12 col-sm-3 col-md-3">
					{/* <!-- f-weghit2 --> */}
					<div className="f-weghit2">
						<h4>Information</h4>
						<ul>
							<li>
								<a href="#">About Us</a>
							</li>
							<li>
								<a href="#">Careers</a>
							</li>
							<li>
								<a href="#">Delivery Inforamtion </a>
							</li>
							<li>
								<a href="#">Privacy Policy</a>
							</li>
							<li>
								<a href="#">Terms & Condition</a>
							</li>
						</ul>
					</div>
					{/* <!-- /f-weghit2 --> */}
				</div>
				<div className="col-xs-12 col-sm-3 col-md-3">
					{/* <!-- f-weghit2 --> */}
					<div className="f-weghit2">
						<h4>Customer Service</h4>
						<ul>
							<li>
								<a href="#">Shipping Policy</a>
							</li>
							<li>
								<a href="#">Help & Contact Us</a>
							</li>
							<li>
								<a href="#">Returns & Refunds </a>
							</li>
							<li>
								<a href="#">Online Stores</a>
							</li>
							<li>
								<a href="#">Terms & Conditions</a>
							</li>
						</ul>
					</div>
					{/* <!-- /f-weghit2 --> */}
				</div>

			</div>
		</div>
		{/* <!-- copayright --> */}
		<div className="copayright cwhite">
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-sm-6 col-md-6">
						Copyright &copy;
						<a href="#">Outstock</a> all rights reserved. Powered by
						<a href="#">zcube</a>
					</div>
					<div className="text-right col-xs-12 col-sm-6 col-md-6">
						<div className="f-sicon2">
							<ul>
								<li>
									<a href="#">
										<i className="fa fa-facebook" aria-hidden="true"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fa fa-twitter" aria-hidden="true"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fa fa-google-plus" aria-hidden="true"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fa fa-linkedin" aria-hidden="true"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fa fa-instagram" aria-hidden="true"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fa fa-youtube-play" aria-hidden="true"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* <!-- /copayright --> */}
	</footer>
	{/* <!--  /main  --> */}
	{/* <!-- Get Our Email Letter popup --> */}
	<div className="modal fade modal-popup" id="modal1" data-open-onload="true" data-open-delay="1500" tabindex="-1" role="dialog">
		<div className="modal-dialog modal-lg" role="document">
			<div className="modal-content" style="background-image:url('images/modal-background.jpg'); background-size:cover">
				<button type="button" className="close" data-dismiss="modal" aria-label="Close">
					<i className="fa fa-times"></i>
				</button>
				<div className="modal-body">
					<div className="container-fluid">
						<div className="row">
							<div className="col-sm-2 pt-20 text-center">
							</div>
							<div className="col-sm-8 pt-20 text-center">
								<h2 className="heading font34 inverse">
									Get Our Email Letter</h2>
								<p className="font22 text-center">Subscribe to the Outstock mailing list to receive updates on new arrivals, special offers and other discount information.</p>
								<form name="main">
									<div className="form-group">
										<input type="text" className="form-control" placeholder="Enter your Email id"> </input></div>
									<div className="form-group">
										<button className="btn btn-black" type="button">Subscribe!</button>
									</div>
								</form>
							</div>
							<div className="col-sm-2 pt-20 text-center">
							</div>
							<div className="col-sm-12">
								<div className="form-group text-right">
									<input type="checkbox" name="check" /> Do not show this popup again </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- /Get Our Email Letter popup --> */}
	{/* <!--  quick popup  --> */}
	<div className="modal fade bwidth" id="quickModal" tabindex="-1" role="dialog">
		<div className="modal-dialog" role="document">
			<div className="modal-content">
				<div className="modal-header">
					<button type="button" className="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div className="modal-body">
					<div className="row">
						<div className="col-md-12">
							<div className="row">
								{/* <!-- left side --> */}
								<div className="col-sm-6 col-md-6">
									{/* <!-- product gallery --> */}
									<div id="home-slider3" className="carousel fadein carousel-fade" data-ride="carousel">
										{/* <!-- .home-slider --> */}
										<div className="carousel-inner">
											<div className="item active">
												<div className="caption">
													<img src="assets/images/Products/1.jpg" alt="qoute-icon"/>
												</div>
											</div>
											<div className="item">
												<div className="caption">
													<img src="assets/images/Products/11.jpg" alt="qoute-icon"/>
												</div>
											</div>
											<div className="item">
												<div className="caption">
													<img src="assets/images/Products/8.jpg" alt="qoute-icon"/>
												</div>
											</div>
											<div className="item">
												<div className="caption">
													<img src="assets/images/Products/16.jpg" alt="qoute-icon"/>
												</div>
											</div>
											<ul className="carousel-indicators">
												<li data-target="#home-slider3" data-slide-to="0" className="active">
													<img src="assets/images/Products/1.jpg" alt="qoute-icon"/>
												</li>
												<li data-target="#home-slider3" data-slide-to="1" className="">
													<img src="assets/images/Products/11.jpg" alt="qoute-icon"/>
												</li>
												<li data-target="#home-slider3" data-slide-to="2" className="">
													<img src="assets/images/Products/8.jpg" alt="qoute-icon"/>
												</li>
												<li data-target="#home-slider3" data-slide-to="3" className="">
													<img src="assets/images/Products/16.jpg" alt="qoute-icon"/>
												</li>
											</ul>
										</div>
										{/* <!-- /.home-slider --> */}
									</div>
									{/* <!-- / product gallery --> */}
								</div>
								{/* <!-- left side --> */}
								{/* <!-- right side --> */}
								<div className="col-sm-6 col-md-6">
									{/* <!-- .pro-text --> */}
									<div className="pro-text product-detail">
										{/* <!-- /.pro-img --> */}
										<a href="#">
											<h4>Wooden Container Bowl</h4>
										</a>
										<div className="star2">
											<ul>
												<li className="red-color">
													<i className="fa fa-star" aria-hidden="true"></i>
												</li>
												<li className="red-color">
													<i className="fa fa-star" aria-hidden="true"></i>
												</li>
												<li className="red-color">
													<i className="fa fa-star" aria-hidden="true"></i>
												</li>
												<li>
													<i className="fa fa-star" aria-hidden="true"></i>
												</li>
												<li>
													<i className="fa fa-star" aria-hidden="true"></i>
												</li>
												<li>
													<a href="#">10 review(s)</a>
												</li>
												<li>
													<a href="#"> Add your review</a>
												</li>
											</ul>
										</div>
										<p className="price-detail">$160.00
											<span>$254.00</span>
										</p>
										<p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat
											nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue
											duis dolore te feugait nulla facilisi. </p>
										<ul className="short-ul">
											<li>Claritas est etiam processus dynamicus.</li>
											<li>Qui sequitur mutationem consuetudium lectorum. </li>
											<li>Claritas est etiam processus dynamicus.</li>
										</ul>
										<div className="size">
											<p>Size *</p>
											<div className="select-option">
												<select>
													<option value="28">28</option>
													<option value="32">32</option>
													<option value="34">34</option>
													<option value="36">36</option>
													<option value="Featured Pots">- Please select -</option>
												</select>
											</div>
										</div>
										<div className="size">
											<p>Color *</p>
											<div className="select-option">
												<select>
													<option value="Black">Black</option>
													<option value="Red">Red</option>
													<option value="Featured Pots">- Please select -</option>
												</select>
											</div>
										</div>
										<form>
											<div className="numbers-row">
												<input name="french-hens" id="french-hens" value="3" type="text"></input>
												<div className="inc button">+</div>
												<div className="dec button">-</div>
											</div>
										</form>
										<a href="#" className="addtocart2">Add to cart</a>
										<a href="#" className="hart">
											<i className="fa fa-heart-o" aria-hidden="true"></i>
										</a>
										<a href="#" className="hart">
											<i className="fa fa-sliders" aria-hidden="true"></i>
										</a>
										<div className="tag">
											<p>Categories:
												<span>Bags, Blazers, Boots, Jackets, Pants, Shirts.</span>
											</p>
											<p>Tag:
												<span>outerwear.</span>
											</p>
										</div>
										<div className="share">
											<ul>
												<li>Share:</li>
												<li>
													<a href="#">
														<i className="fa fa-facebook" aria-hidden="true"></i>
													</a>
												</li>
												<li>
													<a href="#">
														<i className="fa fa-twitter" aria-hidden="true"></i>
													</a>
												</li>
												<li>
													<a href="#">
														<i className="fa fa-dribbble" aria-hidden="true"></i>
													</a>
												</li>
												<li>
													<a href="#">
														<i className="fa fa-linkedin" aria-hidden="true"></i>
													</a>
												</li>
											</ul>
										</div>

									</div>
									{/* <!-- /.pro-text --> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- /.modal-content --> */}
		</div>
		{/* <!-- /.modal-dialog --> */}
	</div>
	{/* <!-- /.modal --> */}
	{/* <!--  / quick popup  --> */}
	<script src="assets/js/jquery.js"></script>
	{/* <!-- Bootstrap Core JavaScript --> */}
	<script src="assets/js/bootstrap.min.js"></script>
	<script src="assets/js/bootstrap-dropdownhover.min.js"></script>
	{/* <!-- Plugin JavaScript --> */}
	<script src="assets/js/jquery.easing.min.js"></script>
	<script src="assets/js/wow.min.js"></script>
	{/* <!--  Custom Theme JavaScript  --> */}
	<script src="assets/js/custom.js"></script>
	{/* <!-- owl carousel --> */}
	<script src="assets/owl-carousel/owl.carousel.js"></script>
    ]);
  }
}

export default App;
