import React, { useEffect, useState } from 'react';
import { useGetRequest } from '../../../shared/hooks/getRequest';
import { RenderItems } from '../RenderItems/RenderItems';
import { ProductsSections } from '../ProductsSections/ProductsSections';
import { enums } from '../../../shared/enums';

import './products-section.css';
import { Preloader } from '../../../shared/components/Counter/Preloader';

export const ProductsSectionPremiumWines = () => {
	const initialProducts = useGetRequest(enums.winesPremium);

	const [filterdProducts, setFilteredProducts] = useState([]);

	useEffect(() => {
		setFilteredProducts(initialProducts);
	}, [initialProducts]);

	return (
		<>
		{!filterdProducts.length ? <Preloader /> : <ProductsSections
			title="Premium wines"
			products={initialProducts}
			initialProducts={initialProducts}
			setFilteredProducts={setFilteredProducts}
			idName="premium-wines"
		>
			<section className="products-wrap popularWines">
				<RenderItems products={filterdProducts} />
			</section>
		</ProductsSections>}
		</>
	);
};
