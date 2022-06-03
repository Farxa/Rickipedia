import React from 'react';
import { Link, Button } from '@mui/material';
import styles from './pagination.module.scss';
import classNames from 'classnames';

// type ChildProps = {
// 	count:number
// }

export interface Props {
	page: number;
	totalPages: number;
	handlePagination: (page: number) => void;
}

// const PageNums: React.FunctionComponent<ChildProps> = ({ count }) =>{
const PageNums: React.FC<Props> = ({ page, totalPages, handlePagination }) => {
	// const pageNumbers = [];

	// for (let i = 1; i <= count; i++) {
	//   pageNumbers.push(i);
	// }

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
				<Button>
					<Link
						onClick={() => handlePagination(1)}
						className={classNames(styles.pageItem, {
							[styles.active]: page === 1,
						})}>
						{1}
					</Link>
				</Button>

				{page > 3 && <div className={styles.separator}>...</div>}
				{page === totalPages && totalPages > 3 && (
					<Button>
						<Link className={styles.pageItem} onClick={() => handlePagination(page - 2)}>
							{page - 2}
						</Link>
					</Button>
				)}
				{page > 2 && (
					<Button>
						<Link className={styles.pageItem} onClick={() => handlePagination(page - 1)}>
							{page - 1}
						</Link>
					</Button>
				)}
				{page !== 1 && page !== totalPages && (
					<Button>
						<Link
							className={[styles.pageItem, styles.active].join(' ')}
							onClick={() => handlePagination(page)}>
							{page}
						</Link>
					</Button>
				)}
				{page < totalPages - 1 && (
					<Button>
						<Link className={styles.pageItem} onClick={() => handlePagination(page + 1)}>
							{page + 1}
						</Link>
					</Button>
				)}
				{page === 1 && totalPages > 3 && (
					<Button>
						<Link className={styles.pageItem} onClick={() => handlePagination(page + 2)}>
							{page + 2}
						</Link>
					</Button>
				)}
				{page < totalPages - 2 && <div className={styles.separator}>...</div>}
				<Button>
					<Link
						className={classNames(styles.pageItem, {
							[styles.active]: page === totalPages,
						})}
						onClick={() => handlePagination(totalPages)}>
						{totalPages}
					</Link>
				</Button>
				{page !== totalPages && (
					<Button>
						<Link
							className={[styles.pageItem, styles.sides].join(' ')}
							onClick={() => handlePagination(page + 1)}>
							&gt;
						</Link>
					</Button>
				)}
			</div>
		</div>
	);
};
export default PageNums;
