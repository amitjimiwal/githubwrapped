"use client";
import { useCallback } from "react";
import html2canvas from "html2canvas";

export default function DownloadButton({
  targetId,
  name,
}: {
  targetId: string;
  name: string;
}) {
  const handleDownload = useCallback(async () => {
    try {
      const element = document.getElementById(targetId);
      if (!element) {
        console.error("Target element not found");
        return;
      }
      const canvas = await html2canvas(element);
      const dataUrl = canvas.toDataURL("image/png");

      // Create temporary link for download
      const link = document.createElement("a");
      link.download = `${name}.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("Error generating download:", error);
    }
  }, [targetId]);

  return (
    <button
      onClick={handleDownload}
      className="sm:px-4 sm:py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors font-bold p-1"
    >
      Download
    </button>
  );
}
