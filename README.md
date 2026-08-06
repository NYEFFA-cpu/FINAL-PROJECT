# External CSS Summary 
This stylesheet creates a sophisticated, nature-inspired aesthetic for the Linen & Lore brand. The design features:

Animated gradient background with a slow-moving earth-tone palette (sage green, warm taupe, and dusty rose) that creates a calming, organic feel

Glass-morphism effect on the main container with backdrop blur, semi-transparent backgrounds, and subtle borders

Navigation styling with pill-shaped buttons featuring hover effects (colour inversion, scaling, and enhanced shadow)

Typography using Times New Roman, with the main heading rendered in black with a transparent text effect

Responsive design that adapts gracefully for tablets and mobile devices, adjusting padding, font sizes, and layout

Footer with a blurred glass effect, subtle borders, and interactive link hover states

The overall design evokes a sense of craftsmanship, elegance, and natural luxury, perfectly aligning with a slow-fashion brand identity.

## HTML Summary
This is the homepage for LINEN & LORE, a brand specialising in sustainable, earth-friendly linen fashion. The page structure includes:

Semantic elements: <header>, <main> (used as a navigation container), and <footer>

Navigation: Five-page menu (Home, About, Services, Gallery, Contact) with clean, accessible links

Hero message: A welcoming headline that introduces the brand's ethos of timeless style and natural materials

Footer: Contains copyright information and brand descriptors ("handwoven · earthkind · slow fashion")
# Linen & Lore – Gallery Page

## 📖 Project Overview
The **Linen & Lore Gallery Page** is a modern, responsive, and interactive webpage designed to showcase a clothing brand's collection in a clean and visually appealing way. The gallery allows visitors to browse fashion items through a responsive grid layout while enjoying smooth animations and interactive features powered by JavaScript.

## 👩‍💻 Author
Developed as a front-end web development project for **Linen & Lore**, a modern clothing brand focused on showcasing fashion collections through a stylish and user-friendly online gallery.
## 📄 License
This project is available for educational and personal use.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LINEN & LORE | Services</title>

    <link rel="stylesheet" href="style.css">
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
    
</head>
<body>

<!--navigation-->

<header>

<div class="service-logo">

<h2>LINEN & LORE</h2>

</div>

<nav>

<ul>

<li><a href="index.html">Home</a></li>
<li><a href="about-us.html">About</a></li>
<li><a href="gallery.html">Gallery</a></li>
<li><a href="services.html">Services</a></li>
<li><a href="contacts.html">Contact</a></li>

</ul>

</nav>

</header>

<!--hero part-->

<section class="services-hero">

<div class="services-hero">

<h1>Style Tailored To You</h1>

<p>Experience premium fashion services designed to make shopping effortless,elegant and enjoyable.
</p>

</div>

</section>
    
<!--services part-->

<section class="services">

<h1>Our Services</h1>

<p class="services-intro">At LINEN & LORE, we are committed to delivering stylish,high-quality and affordable collections are carefully selected to combine elegance,comfort and durability thus ensuring you always look and feel your best.  
</p>

<div class="services-offered">

<div class="services-card" id="mens-card">

<i class="fa-solid fa-shirt"></i>

<h3>Men's Collection</h3>

<p>
   Discover premium menswear designed for both casual and formal occasions.From everyday essentials to sophisticated outfits.We help you express confidence through timeless fashion.
</p>

</div>

<div class="services-card" id="womens-card">

<i class="fa-solid fa-person-dress"></i>

<h3>Women's Collection</h3>

<p>
   Explore elegant and contemporary clothing crafted to complement every lifestyle.Our women's collection blends comfort,beauty and modern trends for every occasion.
</p>

</div>

<div class="services-card" id="childrens-card">

<i class="fa-solid fa-child"></i>

<h3>Children's Collection</h3>

<p>
    Our children's clothing is designed with comfort,durability and style in mind.This allows kids to look great while staying active and comfortable throughout the day.
</p>

</div>

</div>

<div class="explore-collection">

<p>
    Browse our complete collection and discover the latest styles designed just for you.
</p>

<a href="gallery.html#collection"class="explore-btn" id="exploreBtn">Explore Collection</a>

</div>

</section>

<!--why choose-->

<section class="why-us">

<h2>Why Choose Us?</h2>

<div class="features">

<div>

<h3>Premium Quality</h3>

<p>
    Only carefully selected fabrics and trusted brands.
</p>

</div>

<div>

<h3>Affordable Luxury</h3>

<p>
    Luxury fashion without premium prices.
</p>

</div>

<div>
     
<h3>Excellent Support</h3>

<p>
    Friendly customer service whenever you need help.
</p>

</div>

</div>

</section>

<!--testimonials-->

<section class="testimonials" id="reviews">

<h2>Customer Reviews</h2>

<div class="reviews">

<div class="review review-card">

<h3>Jane Doe</h3>

<div class="stars" id="stars1">

<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>

</div>

<p>
   "The tailoring service exceeded my expectations.Highly recommended."
</p>

</div>

<div class="review review-card">

<h3>John Smith</h3>

<div class="stars" id="stars2">

<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>

</div>

<p>
    "Beautiful clothing and incredibly fast delivery."
</p>

</div>

<div class="review review-card">

<h3>Emily Johnson</h3>


<div class="stars" id="stars3">

<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>

</div>

<P>
    "The styling consultation helped me completely refresh my wardrobe."
</P>

</div>

</div>

</section>

<!--call to action-->

<section class="cta">

<h2>Upgrade Your Wardrobe Today</h2>

<p>
    Discover timeless fashion crafted for confidence and elegance.
</p>

</section>

<div id="messageBox"></div>

<!--footer-->

<footer>

<P>
    © 2026 LINEN & LORE.All Rights Reserved.
</P>

</footer>

<button id="topBtn">

<i class="fa-solid fa-arrow-up"></i>

<
