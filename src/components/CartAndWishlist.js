// import { useState } from 'react';
// import { FiShoppingCart, FiHeart, FiTrash2, FiArrowRight } from 'react-icons/fi';

// // Shared Product Card Component
// const ProductCard = ({ product, onRemove, onMoveToCart, onMoveToWishlist, isCart = false }) => {
//   return (
//     <div className="flex items-start border-b border-gray-200 py-4">
//       <img 
//         src={product.image} 
//         alt={product.name} 
//         className="w-20 h-20 object-cover rounded mr-4"
//       />
//       <div className="flex-1">
//         <h3 className="font-medium text-gray-800">{product.name}</h3>
//         <p className="text-gray-600">${product.price.toLocaleString()}</p>
//         <div className="flex items-center mt-2 space-x-4">
//           {isCart && (
//             <div className="flex items-center border border-gray-300 rounded">
//               <button className="px-2 py-1">-</button>
//               <span className="px-2">1</span>
//               <button className="px-2 py-1">+</button>
//             </div>
//           )}
//         </div>
//       </div>
//       <div className="flex flex-col space-y-2">
//         <button 
//           onClick={onRemove}
//           className="text-gray-500 hover:text-red-500"
//         >
//           <FiTrash2 size={18} />
//         </button>
//         {isCart ? (
//           <button 
//             onClick={onMoveToWishlist}
//             className="text-gray-500 hover:text-pink-500"
//           >
//             <FiHeart size={18} />
//           </button>
//         ) : (
//           <button 
//             onClick={onMoveToCart}
//             className="text-gray-500 hover:text-yellow-500"
//           >
//             <FiShoppingCart size={18} />
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// // Cart Component
// const Cart = ({ items, onRemoveItem, onMoveToWishlist, onCheckout }) => {
//   const subtotal = items.reduce((sum, item) => sum + item.price, 0);
//   const shipping = 15.00;
//   const tax = subtotal * 0.1;
//   const total = subtotal + shipping + tax;

//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-6 flex items-center">
//         <FiShoppingCart className="mr-2" /> Your Cart ({items.length})
//       </h2>
      
//       {items.length === 0 ? (
//         <div className="text-center py-12">
//           <p className="text-gray-500 mb-4">Your cart is empty</p>
//           <button className="bg-yellow-600 text-white px-6 py-2 rounded-full">
//             Continue Shopping
//           </button>
//         </div>
//       ) : (
//         <div className="grid md:grid-cols-3 gap-8">
//           <div className="md:col-span-2">
//             {items.map((item) => (
//               <ProductCard
//                 key={item.id}
//                 product={item}
//                 isCart={true}
//                 onRemove={() => onRemoveItem(item.id)}
//                 onMoveToWishlist={() => onMoveToWishlist(item)}
//               />
//             ))}
//           </div>
          
//           <div className="bg-gray-50 p-6 rounded-lg h-fit">
//             <h3 className="font-bold text-lg mb-4">Order Summary</h3>
//             <div className="space-y-3 mb-6">
//               <div className="flex justify-between">
//                 <span>Subtotal</span>
//                 <span>${subtotal.toFixed(2)}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Shipping</span>
//                 <span>${shipping.toFixed(2)}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Tax</span>
//                 <span>${tax.toFixed(2)}</span>
//               </div>
//               <div className="flex justify-between border-t border-gray-200 pt-3 font-bold">
//                 <span>Total</span>
//                 <span>${total.toFixed(2)}</span>
//               </div>
//             </div>
//             <button 
//               onClick={onCheckout}
//               className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded-full flex items-center justify-center"
//             >
//               Checkout <FiArrowRight className="ml-2" />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // Wishlist Component
// const Wishlist = ({ items, onRemoveItem, onMoveToCart }) => {
//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-6 flex items-center">
//         <FiHeart className="mr-2" /> Your Wishlist ({items.length})
//       </h2>
      
//       {items.length === 0 ? (
//         <div className="text-center py-12">
//           <p className="text-gray-500 mb-4">Your wishlist is empty</p>
//           <button className="bg-yellow-600 text-white px-6 py-2 rounded-full">
//             Browse Products
//           </button>
//         </div>
//       ) : (
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {items.map((item) => (
//             <div key={item.id} className="border border-gray-200 rounded-lg p-4">
//               <ProductCard
//                 product={item}
//                 onRemove={() => onRemoveItem(item.id)}
//                 onMoveToCart={() => onMoveToCart(item)}
//               />
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// // Parent Component to manage state
// const CartAndWishlist = () => {
//   const [activeTab, setActiveTab] = useState('cart');
//   const [cartItems, setCartItems] = useState([
//     {
//       id: 1,
//       name: "Diamond Solitaire Ring",
//       price: 2499,
//       image: "https://media.istockphoto.com/id/511646917/photo/golden-diamond-ring-and-contemporary-diamond.jpg"
//     },
//     {
//       id: 2,
//       name: "Gold Wedding Band",
//       price: 899,
//       image: "https://media.istockphoto.com/id/154956296/photo/gold-ring.jpg"
//     }
//   ]);
  
//   const [wishlistItems, setWishlistItems] = useState([
//     {
//       id: 3,
//       name: "Pearl Necklace",
//       price: 1299,
//       image: "https://media.istockphoto.com/id/1124639802/photo/fashion-bracelet-isolated-on-black-background.jpg"
//     }
//   ]);

//   const removeFromCart = (id) => {
//     setCartItems(cartItems.filter(item => item.id !== id));
//   };

//   const removeFromWishlist = (id) => {
//     setWishlistItems(wishlistItems.filter(item => item.id !== id));
//   };

//   const moveToWishlist = (item) => {
//     removeFromCart(item.id);
//     setWishlistItems([...wishlistItems, item]);
//   };

//   const moveToCart = (item) => {
//     removeFromWishlist(item.id);
//     setCartItems([...cartItems, item]);
//   };

//   const handleCheckout = () => {
//     alert('Proceeding to checkout!');
//     // Typically would navigate to checkout page
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <div className="bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex border-b">
//             <button
//               className={`py-4 px-6 font-medium ${activeTab === 'cart' ? 'text-yellow-600 border-b-2 border-yellow-600' : 'text-gray-500'}`}
//               onClick={() => setActiveTab('cart')}
//             >
//               Cart ({cartItems.length})
//             </button>
//             <button
//               className={`py-4 px-6 font-medium ${activeTab === 'wishlist' ? 'text-yellow-600 border-b-2 border-yellow-600' : 'text-gray-500'}`}
//               onClick={() => setActiveTab('wishlist')}
//             >
//               Wishlist ({wishlistItems.length})
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="py-8">
//         {activeTab === 'cart' ? (
//           <Cart 
//             items={cartItems} 
//             onRemoveItem={removeFromCart}
//             onMoveToWishlist={moveToWishlist}
//             onCheckout={handleCheckout}
//           />
//         ) : (
//           <Wishlist 
//             items={wishlistItems} 
//             onRemoveItem={removeFromWishlist}
//             onMoveToCart={moveToCart}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default CartAndWishlist;