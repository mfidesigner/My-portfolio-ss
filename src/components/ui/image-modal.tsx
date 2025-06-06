import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageModalProps {
  src: string;
  alt: string;
  children: React.ReactNode;
}

export const ImageModal = ({ src, alt, children }: ImageModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative cursor-pointer group">
          {children}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <ZoomIn className="h-8 w-8 text-white" />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-7xl w-full h-[90vh] p-0 border-0">
        <div className="relative w-full h-full bg-black rounded-lg overflow-hidden">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};