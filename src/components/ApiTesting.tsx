import React, { useState, useEffect, useMemo, useCallback } from "react";

import { Box, Button, Typography } from "@mui/material";

import { useQuery } from "@tanstack/react-query";
import { usePosts } from "../services/api/usePosts";

interface PaginationProps {
  data?: string[];
  page?: number;
  itemsPerPage?: number;
}

const Pagination = (props: PaginationProps) => {
  const { data = [], page = 1, itemsPerPage = 20 } = props;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return data.slice(startIndex, endIndex);
};

const ApiTesting = () => {
  const { getPosts } = usePosts();

  //State
  const [returnPosts, setReturnPosts] = useState<[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);

  useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    onSuccess: (data: any) => {
      console.log(`SUCCESS`, data);
      setReturnPosts(data);
    },
    onError: (error: any) => {
      console.log(`ERROR`, error);
    },
    enabled: true,
  });

  const paginatedPosts = useMemo(
    () =>
      Pagination({
        data: returnPosts,
        page: currentPage,
        itemsPerPage,
      }),
    [currentPage, itemsPerPage, returnPosts]
  );

  const handlePreviousPage = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  }, [currentPage]);

  const handleNextPage = useCallback(() => {
    const totalPages = Math.ceil(returnPosts.length / itemsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  }, [currentPage]);

  return (
    <Box sx={{}}>
      {paginatedPosts &&
        paginatedPosts.map((item: any, index) => (
          <Box key={index}>
            <Typography>
              {item.id} {item.title}
            </Typography>
          </Box>
        ))}

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </Button>
        <Typography>{currentPage}</Typography>
        <Button
          onClick={handleNextPage}
          disabled={
            currentPage === Math.ceil(returnPosts.length / itemsPerPage)
          }
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default ApiTesting;
