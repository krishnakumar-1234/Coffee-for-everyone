import React from "react";
import { motion } from "framer-motion";

const showreelData = [
  { id: 1, title: "Project 1", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3eUsd9GVBZj8NOz_1jy4Mc3OIIytawFItLpmz5BQFoowEA4RM8NMtow9kqpRHdQOksdE&usqp=CAU" },
  { id: 2, title: "Project 2", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3eUsd9GVBZj8NOz_1jy4Mc3OIIytawFItLpmz5BQFoowEA4RM8NMtow9kqpRHdQOksdE&usqp=CAU" },
  { id: 3, title: "Project 3", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3eUsd9GVBZj8NOz_1jy4Mc3OIIytawFItLpmz5BQFoowEA4RM8NMtow9kqpRHdQOksdE&usqp=CAU" },
  { id: 4, title: "Project 4", img: "https://hneeblog.com/wp-content/uploads/2024/06/1688014613763ef74d89154de713b849.webp" },
  { id: 5, title: "Project 5", img: "https://hneeblog.com/wp-content/uploads/2024/06/1688014613763ef74d89154de713b849.webp" },
  { id: 6, title: "Project 6", img: "https://hneeblog.com/wp-content/uploads/2024/06/1688014613763ef74d89154de713b849.webp" },
];

const ShowreelGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {showreelData.map((item) => (
        <motion.div
          key={item.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-40 object-cover rounded-lg"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg"
          >
            <span className="text-white text-lg font-semibold">
              {item.title}
            </span>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default ShowreelGrid;
