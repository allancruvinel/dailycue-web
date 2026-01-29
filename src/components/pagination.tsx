import { Field } from "@/components/ui/field";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from "./ui/pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: number) => void;
  className?: string;
}

export const PaginationComponent = ({
  currentPage,
  totalPages,
  onPageChange,
  onPageSizeChange,
  className,
}: PaginationProps) => {
  const handlePaginate = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const handlePageSizeChange = (pageSize: number) => {
    onPageSizeChange(pageSize);
  };

  return (
    <Pagination className={className}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={() => handlePaginate(currentPage - 1)} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={() => handlePaginate(1)}>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={() => handlePaginate(2)} isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={() => handlePaginate(3)}>3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={() => handlePaginate(1 + 1)} />
        </PaginationItem>
      </PaginationContent>
      <Field orientation="horizontal" className="w-fit">
        <Select
          defaultValue="25"
          onValueChange={(e) => handlePageSizeChange(Number(e))}
        >
          <SelectTrigger className="w-20" id="select-rows-per-page">
            <SelectValue />
          </SelectTrigger>
          <SelectContent align="start">
            <SelectGroup>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
              <SelectItem value="400">400</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>
    </Pagination>
  );
};
