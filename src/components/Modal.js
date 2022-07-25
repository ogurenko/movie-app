import {
  Button,
  AspectRatio,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const ModalTrailer = ({ trailer }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Play Trailer</Button>

      <Modal size='3xl' isOpen={isOpen} isCentered={true} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Movie Trailer</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AspectRatio ratio={16 / 9}>
              <iframe
                title="video-player"
                src={`https://www.youtube.com/embed/${trailer.key}`}
                allowFullScreen
                
              />
            </AspectRatio>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalTrailer;
