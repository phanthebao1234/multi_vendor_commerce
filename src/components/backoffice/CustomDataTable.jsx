"use client";
import React, { useState } from "react";
import data from "../../../data.json";

export default function CustomDataTable() {
  // khởi tạo state selectedProducts với giá trị ban đầu là 1 []
  const [selectedProducts, setSelectedProducts] = useState([]);

  // khởi tạo state isAllSelected với giá trị ban đầu là false
  const [isAllSelected, setIsAllSelected] = useState(false);

  // hàm handleCheckboxChange với tham số truyền vào là itemId
  const handleCheckboxChange = (itemId) => {
    // nếu itemId có trong mảng selectedProducts (includes kiểm tra itemId có trong selectedProducts[], nếu có return true / false)
    if (selectedProducts.includes(itemId)) {
      // true: nếu itemId đã có trong mảng
      // sẽ sử dụng filter để tạo 1 mảng mới chứa các id không bằng itemId
      setSelectedProducts(selectedProducts.filter((id) => id !== itemId));
    } else {
      // ngược lại nếu itemId chưa có trong mảng
      // sử dụng toán tử spread để tạo 1 mảng mới bao gồm các phần tử hiện tại của setSelectedProducts và cộng thêm itemId
      setSelectedProducts([...selectedProducts, itemId]);
    }
  };
  // hàm xử lý select all (chọn tất cả) và unselect all (bỏ chọn tất cả)
  const handleSelectedAllChange = () => {
    //  nếu isAllselected = true
    if (isAllSelected) {
      // nếu tất cả các mục đang được chọn
      // set lại setSelectedProducts = []
      setSelectedProducts([]);
    } else {
      // nếu tất cả các mục không được chọn
      // đặt setSelectedProducts thành 1 mảng chứa tất cả itemId
      setSelectedProducts(data.map((item) => item.id));
    }
    // cập nhật trạng thái thành giá trị ngược lại của nó (true <=> false)
    setIsAllSelected(!isAllSelected);
  };
  const arr = [1, 2, 3, 4, 5];
  const PAGE_SIZE = 10;
  const totalPages = Math.ceil(data.length / PAGE_SIZE);

  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const currentlyDisplayedData = data.slice(startIndex, endIndex);
  const handlePageChange = (page) => {
    setCurrentPage(page + 1);
  };
  const itemStartIndex = startIndex + 1;
  const itemEndIndex = Math.min(endIndex, data.length);
  return (
    <div className="">
      <h2 className="text-xl font-bold mb-4">Recent Order</h2>
      {/* table */}
      <div className="p-8">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-2">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      checked={isAllSelected}
                      onChange={handleSelectedAllChange}
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  First Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Last Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Gender
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {currentlyDisplayedData.map((item, i) => {
                return (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    key={i}
                  >
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          checked={selectedProducts.includes(item.id)}
                          onChange={() => handleCheckboxChange(item.id)}
                          id={`checkbox-table-search-${item.id}`}
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td className="px-6 py-4">{item.id}</td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.email}
                    </th>
                    <td className="px-6 py-4">{item.first_name}</td>
                    <td className="px-6 py-4">{item.last_name}</td>
                    <td className="px-6 py-4">{item.gender}</td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <nav
            className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
            aria-label="Table navigation"
          >
            <span className="text-xl font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
              Showing{" "}
              <span className="font-semibold text-gray-50 dark:text-white">
                {`${itemStartIndex} -  ${itemEndIndex}`}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-gray-50 dark:text-white">
                {data.length}
              </span>
            </span>
            <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-10">
              <li>
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage == 1}
                  className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Previous
                </button>
              </li>
              {Array.from({ length: totalPages }, (item, index) => {
                return (
                  <li key={index}>
                    <button
                      
                      onClick={() => setCurrentPage(index + 1)}
                      disabled={currentPage == index + 1}
                      className={
                        currentPage == index + 1
                          ? "flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                          : "flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      }
                    >
                      {index + 1}
                    </button>
                  </li>
                );
              })}
              <li>
                <button
                  onClick={() => handlePageChange(currentPage)}
                  disabled={currentPage == totalPages}
                  className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
