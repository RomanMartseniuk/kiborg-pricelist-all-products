import { Suspense, useEffect, useState } from "react";
import cn from 'classnames'
import { makeProductsLists } from "./utils/makeProductsLists";
import type { CategoryList } from "./types/CategoryList";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { Spinner } from "./components/ui/spinner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";

const App = () => {
  const [productLists, setProductLists] = useState<CategoryList[]>([]);

  useEffect(() => {
    makeProductsLists().then((data) => setProductLists(data));
  }, []);

  return (
    <>
      <h1>Products</h1>
      <Suspense fallback={<Spinner />}>
        <Accordion type="single" collapsible defaultValue="item-0">
          {productLists.map((list, id) => {

            return (
              <AccordionItem
                value={`item-${list.id}`}
                key={list.id}
                className="AccordionItem"
                disabled={!list.products.length}
              >
                <AccordionTrigger
                  className={cn("block w-full h-10 cursor-pointer", {
                    "bg-[#EBE9DE]": Math.floor(id % 2) === 0,
                  })}
                >
                  {list.name}
                </AccordionTrigger>
                <AccordionContent className="AccordionContent">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">Артикул</TableHead>
                        <TableHead>Назва</TableHead>
                        <TableHead>РЦЦ</TableHead>
                        <TableHead>ОПТ</TableHead>
                        <TableHead>ДРОП</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {list.products.map((product) => {
                        return (
                          <TableRow>
                            <TableCell className="font-medium">
                              {product.vendorCode}
                            </TableCell>
                            <TableCell>{product.name}</TableCell>
                            <TableCell>{product.price}</TableCell>
                            <TableCell>{product.optPrice}</TableCell>
                            <TableCell>{product.dropPrice}</TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </Suspense>
    </>
  );
};

export default App;
