import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { GeneratePageBtns } from './components/GeneratePageBtns';
import { useGetRangedWines } from '../../shared/hooks/useGetRangedWines';
import { Preloader } from '../../shared/components/Counter/Preloader';

import './all-wines.css';

export const AllWines = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const pageNumber = Number(searchParams.get('page')) || 1;

	const { data, setData } = useGetRangedWines(pageNumber) || [];
	const { items, pagesCount } = data || [];

	function changePageUrl(page) {
		setData(undefined);
		setSearchParams(`page=${page}`);
	}

	function changeRange(number) {
		changePageUrl(number);
	}

	function changeToPreviousState() {
		if (pageNumber !== 1) {
			changePageUrl(pageNumber - 1);
		}
	}

	function changeToNextState() {
		if (pageNumber !== pagesCount) {
			const newPage = pageNumber + 1;
			changePageUrl(newPage);
		}
	}

	return (
		<div className="all-wines-wrap">
			<h1 className="wines-list-label">Wines list:</h1>
			<div className="all-wines-section">
				{items === undefined ? (
					<Preloader />
				) : (
					items?.map((wine) => {
						return (
							<Link to={`/wine?id=${wine.id}`} key={wine.id} className="wine-wrap">
								<img className="wine-img" src={wine.imgURL} alt={wine.description} />
								<p className="wine-name">{wine.description}</p>
							</Link>
						);
					})
				)}
			</div>
			<div className="pag-wrap">
				<div className="wines-pagination">
					<button onClick={changeToPreviousState} className="previous-btn">
						Previous
					</button>
					<div className="pagination-numbers">
						<GeneratePageBtns
							pageNumber={pageNumber}
							changeRange={changeRange}
							pagesCount={pagesCount}
						/>
					</div>
					<button onClick={changeToNextState} className="next-btn">
						Next
					</button>
				</div>
			</div>
		</div>
	);
};
