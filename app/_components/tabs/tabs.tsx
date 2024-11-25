"use client";

import { useState } from "react";
import { TabsProps } from "./tabs.types";

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };
  return (
    <div className="tabs w-full">
      <div className="tab-labels">
        {tabs.map((tab, index) => (
          <a
            key={`tab-${index}`}
            className={`tab-label ${
              index === activeTab ? "tab-active" : ""
            } text-xs md:text-base lg:text-base xl:text-base`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </a>
        ))}
      </div>
      {tabs.map((tab, index) => (
        <div
          className="tab-content text-xs md:text-base lg:text-base xl:text-base"
          key={`tab-${index}`}
          style={{ display: activeTab !== index ? "none" : "block" }}
        >
          {typeof tab.content === "string" ? (
            <div
              dangerouslySetInnerHTML={{
                __html: tab.content as TrustedHTML,
              }}
            />
          ) : (
            tab.content
          )}
        </div>
      ))}
    </div>
  );
};
