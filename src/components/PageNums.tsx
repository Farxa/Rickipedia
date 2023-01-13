import React from 'react';
import { Link, Button } from '@mui/material';
import styles from './pagination.module.scss';
import classNames from 'classnames';

export interface Props {
	page: number;
	totalPages: number;
	handlePagination: (page: number) => void;
}

const PageNums: React.FC<Props> = ({ page, totalPages, handlePagination }) => {
	const MAX_PAGE_ITEM = 5;
	const startPage = page - Math.floor(MAX_PAGE_ITEM / 2) < 1 ? 1 : page - Math.floor(MAX_PAGE_ITEM / 2);
	const endPage =
		page + Math.floor(MAX_PAGE_ITEM / 2) > totalPages ? totalPages : page + Math.floor(MAX_PAGE_ITEM / 2);
	const hasHiddenBefore = startPage !== 1;
	const hasHiddenAfter = endPage !== totalPages;

	return (
		<div className={styles.pagination}>
			<div className={styles.paginationWrapper}>
				{page !== 1 && (
					<Button>
						<Link
							onClick={() => handlePagination(page - 1)}
							className={classNames([styles.pageItem, styles.sides].join(' '))}>
							&lt;
						</Link>
					</Button>
				)}
				{hasHiddenBefore && <div className={styles.separator}>...</div>}
				{Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map(num => (
					<Button onClick={() => handlePagination(num)}>
						<Link
							className={classNames([
								styles.pageItem,
								{
									[styles.active]: num === page,
								},
							])}>
							{num}
						</Link>
					</Button>
				))}
				{hasHiddenAfter && <div className={styles.separator}>...</div>}
				{page !== totalPages && (
					<Button>
						<Link
							onClick={() => handlePagination(page + 1)}
							className={classNames([styles.pageItem, styles.sides].join(' '))}>
							&gt;
						</Link>
					</Button>
				)}
			</div>
		</div>
	);
};

export default PageNums;
