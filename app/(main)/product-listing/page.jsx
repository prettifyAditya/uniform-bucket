"use client"
import ProductCol from "@/components/ProductCol";
import "../../../styles/product/product.css"
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Range } from 'react-range';
import { useModalStore } from "@/store/modalStore";


const MIN = 0;
const MAX = 10000;

const categoryOptions = [
  { id: 1, name: 'Corporate' },
  { id: 2, name: 'Hotel' },
  { id: 3, name: 'SPA & Salon' },
  { id: 4, name: 'Industrial' },
  { id: 5, name: 'Security' },
  { id: 6, name: 'Hospital' },
  { id: 7, name: 'By Profession' },
];

const subcategoryOptions = [
  { id: 101, name: 'Formal Shirt' },
  { id: 102, name: 'Chef Coat' },
  { id: 103, name: 'Blazer' },
  { id: 104, name: 'Lab Coat' },
  { id: 105, name: 'Scrub Set' },
  { id: 106, name: 'Tunic' },
];

const genderOptions = [
    {id: 201, name: 'Male'},
    {id: 202, name: 'Female'},
];

const sortOptions = [
  { id: 301, name: 'A to Z' },
  { id: 302, name: 'Z to A' },
  { id: 303, name: 'Low to High' },
  { id: 304, name: 'High to Low' },
];

export default function ProductListing() {
    const [price, setPrice] = useState([0, 10000]);
    const [categoryOpen, setCategoryOpen] = useState(false);
    const [subcategoryOpen, setSubcategoryOpen] = useState(false);
    const [priceOpen, setPriceOpen] = useState(false)
    const [genderOpen, setGenderOpen] = useState(false);
    const [sortOpen, setSortOpen] = useState(false);
    const [openFilterClass, setOpenFilterClass] = useState(false);
    const isOpenFilter = useModalStore((state) => state.isFilterOpen)
    const opennFilter = useModalStore((state) => state.openFilter)
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedSubcategories, setSelectedSubcategories] = useState([]);
    const [selectedGender, setSelectedGender] = useState([]);
    const [selectedSort, setSelectedSort] = useState([]);

    const categoryRef = useRef(null);
    const subcategoryRef = useRef(null);
    const priceRef = useRef(null);
    const genderRef = useRef(null);
    const sortRef = useRef(null);


    const handleToggle = () => {
      if(window.innerWidth < 991) {
        isOpenFilter()
      }
    }

    useEffect(() => {
    const handleClickOutside = (e) => {
      if (categoryRef.current && !categoryRef.current.contains(e.target)) {
        setCategoryOpen(false);
      }
      if (subcategoryRef.current && !subcategoryRef.current.contains(e.target)) {
        setSubcategoryOpen(false);
      }
      if (priceRef.current && !priceRef.current.contains(e.target)){
        setPriceOpen(false)
      }
      if (genderRef.current && !genderRef.current.contains(e.target)) {
        setGenderOpen(false);
      }
      if (sortRef.current && !sortRef.current.contains(e.target)) {
        setSortOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    const handleCategoryChange = (id) => {
        setSelectedCategories(prev =>
        prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    const handleSubcategoryChange = (id) => {
        setSelectedSubcategories(prev =>
        prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };
    const handlePriceRange = (range) => {
      setPrice(range)
    }
    const handleGenderChange = (id) => {
        setSelectedGender(prev =>
        prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };
    const handleSortChange = (id) => {
        setSelectedSort(prev =>
        prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    useEffect(() => {
      const checkViewport = () => {
        setOpenFilterClass(window.innerWidth < 991);
      };
    // Initial check
    checkViewport();
    // Resize listener
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
    }, [])

    return (
      <main>
        <div className="prolisting-secA sec-pad mt-hdrfxd">
          <div className="container">
            <div className="heading">
              <h2>Office Blazers</h2>
              <p>
                Elevate Your Corporate Attire with Premium Blazers  Stylish and
                Professional Office Blazers for All Staff
              </p>
            </div>
          </div>
        </div>
        <div className="list-filter-wrap">
          <div className="container">
            <div className="list-filter">
              <div className="colA" data-model=".list-filter-wrap .colB">
                <button type="button" className="filtr-btn" onClick={opennFilter}>
                  <img src="assets/icon/sort.svg" className="svg" alt="" />
                </button> 
              </div>
              <div className={`colB ${openFilterClass ? 'model' : ""} ${isOpenFilter ? 'is-open' : ''}`}>
                <div className="fltr-ggf">
                  <div className={`kmr-select-wrap cat_select ${selectedCategories.length > 0 ? 'active' : ''}`} ref={categoryRef}>
                    <div className="label" onClick={(e) => { e.stopPropagation(); setCategoryOpen(prev => !prev); }}>Category</div>
                    <ul className={`kmr-select-menu ${categoryOpen ? 'active' : ''}`}>
                      {/* Loop through each brand in the group */}
                      {categoryOptions.map(option => (
                        <li key={option.id}>
                        <div className="in-bx" />
                        <span>{option.name}</span>
                        <input
                            type="checkbox"
                            checked={selectedCategories.includes(option.id)}
                            onChange={() => handleCategoryChange(option.id)}
                        />
                        </li>
                    ))}
                    </ul>
                  </div>
                  <div className={`kmr-select-wrap subcat_select ${selectedSubcategories.length > 0 ? 'active' : ''}`} ref={subcategoryRef}>
                    <div className="label" onClick={(e) => { e.stopPropagation(); setSubcategoryOpen(prev => !prev); }}>Corporate Blazers</div>
                    <ul className={`kmr-select-menu ${subcategoryOpen ? 'active' : ''}`}>
                      {subcategoryOptions.map(option => (
                        <li key={option.id}>
                        <div className="in-bx" />
                        <span>{option.name}</span>
                        <input
                            type="checkbox"
                            checked={selectedSubcategories.includes(option.id)}
                            onChange={() => handleSubcategoryChange(option.id)}
                        />
                        </li>
                    ))}
                    </ul>
                  </div>
                  <div className={`kmr-select-wrap price_select ${price.length ? 'active': ''}`} ref={priceRef}>
                    <div className="label" onClick={(e) => { e.stopPropagation(); setPriceOpen(prev => !prev); }}>Price</div>
                    <ul className={`kmr-select-menu ${priceOpen ? 'active' : ''}`}>
                      <div className="upper-sec">
                        <h6>Price Range</h6>
                        <button type="button" className="reset-btn"  onClick={() => setPrice([MIN, MAX])}>
                          Reset
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={21}
                            height={21}
                            viewBox="0 0 21 21"
                          >
                            <g
                              fill="none"
                              fillRule="evenodd"
                              stroke="#000"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M3.578 6.487A8 8 0 1 1 2.5 10.5" />
                              <path d="M7.5 6.5h-4v-4" />
                            </g>
                          </svg>
                        </button>
                      </div>
                      <div className="product-price-range">
                        <div className="product-range-slider-range">
                            <Range
                              step={100}
                              min={MIN}
                              max={MAX}
                              values={price}
                              onChange={handlePriceRange}
                              renderTrack={({ props, children }) => (
                                <div {...props} style={{ ...props.style, height: '3px', background: '#000', margin: '30px 10px', borderRadius: '5px' }}>
                                  {children}
                                </div>
                              )}
                              renderThumb={({ props }) => {
                                const { key, ...rest } = props;
                                return(
                                  <div key={key} {...rest} style={{ ...props.style, height: '20px', width: '20px', backgroundColor: '#000', borderRadius: '50%', outline: 'none' }} />
                                )
                              }}
                            />
                        </div>
                        <div className="price-range-input-wrap">
                           <div className="price-range-input">
                            <span>&#8377;</span>
                            {price[0]}
                          </div>
                          <p>to</p>
                          <div className="price-range-input">
                            <span>&#8377;</span>
                            {price[1]}
                          </div>
                        </div>
                      </div>
                    </ul>
                  </div>
                  <div className={`kmr-select-wrap gender-select ${selectedGender.length > 0 ? "active" : ""}`} ref={genderRef}>
                    <div className="label" onClick={(e) => {e.stopPropagation(); setGenderOpen(prev => !prev);}}>Gender</div>
                    <ul className={`kmr-select-menu ${genderOpen ? 'active' : ''}`}>
                        {genderOptions.map(option => (
                            <li key={option.id}>
                                <div className="in-bx" />
                                <span>{option.name}</span>
                                <input
                                    type="radio"
                                    name="gender"
                                    checked={selectedGender.includes(option.id)}
                                    onChange={() => handleGenderChange(option.id)}
                                />
                            </li>
                        ))}
                    </ul>
                  </div>
                  <div className="btn-mbl-btm">
                    <button
                      className="btn close aplly-btn not-ab"
                      type="button"
                    >
                      Apply
                    </button>
                    <button className="btn close clr-btn not-ab" type="button">
                      Clear
                    </button>
                  </div>
                </div>
              </div>
              <div className="colC">
                <div className={`kmr-select-wrap sort_by slt-rgt ${selectedSort.length > 0 ? "active" : ''}`} ref={sortRef}>
                  <div className="label" onClick={(e) => {e.stopPropagation(); setSortOpen(prev => !prev);}}>Sort By</div>
                  <ul className={`kmr-select-menu ${sortOpen ? 'active' : ''}`}>
                    {sortOptions.map(option => (
                        <li key={option.id}>
                            <div className="in-bx" />
                            <span>{option.name}</span>
                            <input
                                type="checkbox"
                                checked={selectedSort.includes(option.id)}
                                onChange={() => handleSortChange(option.id)}
                            />
                        </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="total_products">
            <div className="container">
                <p>104 Products</p>
                <div className="selected_pro_wraper">
                    {selectedCategories.map((id) => {
                      const name = categoryOptions.find(opt => opt.id === id)?.name
                      return(
                        <div key={`cat-${id}`} className="selected">
                          {name}
                          <Image src="/assets/icon/cross.svg" width="15" height="15" alt="Remove" onClick={() =>
                            setSelectedCategories(prev => prev.filter(i => i !== id))
                          }></Image>
                        </div>
                      )
                    })}
                    {selectedSubcategories.map((id) => {
                      const name = subcategoryOptions.find(opt => opt.id === id)?.name
                      return(
                        <div key={`subcat-${id}`} className="selected">
                          {name}
                          <Image src="/assets/icon/cross.svg" width="15" height="15" alt="Remove" onClick={() =>
                            setSelectedSubcategories(prev => prev.filter(i => i !== id))
                          }></Image>
                        </div>
                      )
                    })}
                    {/* <div className="selected">
                        Corporate
                        <Image src="/assets/icon/cross.svg" width="15" height="15" alt="Cross"></Image>
                    </div> */}
                </div>
            </div>
        </div>
        <div className="proListing_grid_wrapper sec-pad">
            <div className="container">
                <div className="proListing_grid">
                    <ProductCol
                        imgSrc="/assets/images/product/product1.jpg"
                        proName="Black Formal Blazer For Men"
                        price="₹ 2,513.00"
                    />
                    <ProductCol
                        imgSrc="/assets/images/product/product1.jpg"
                        proName="Black Formal Blazer For Men"
                        price="₹ 2,513.00"
                    />
                    <ProductCol
                        imgSrc="/assets/images/product/product1.jpg"
                        proName="Black Formal Blazer For Men"
                        price="₹ 2,513.00"
                    />
                    <ProductCol
                        imgSrc="/assets/images/product/product1.jpg"
                        proName="Black Formal Blazer For Men"
                        price="₹ 2,513.00"
                    />
                    <ProductCol
                        imgSrc="/assets/images/product/product1.jpg"
                        proName="Black Formal Blazer For Men"
                        price="₹ 2,513.00"
                    />
                    <ProductCol
                        imgSrc="/assets/images/product/product1.jpg"
                        proName="Black Formal Blazer For Men"
                        price="₹ 2,513.00"
                    />
                </div>
                <button type="button" className="load_more">
                    <Image src="/assets/icon/load_more.svg" width="65" height="65" alt="Load More"></Image>
                    Load More..
                </button>
            </div>
        </div>
      </main>
    );
}