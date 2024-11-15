import ContentCard from "./ContentCard";
import ParallaxContent from "./ParallaxContent";

export default function ParallaxProject(){
    return(
        <div className="bg-white">
            <ParallaxContent imgUrl="/image1.jpg" heading="Quality" subHeading="Product Delivered">
                <ContentCard/>
            </ParallaxContent>

            <ParallaxContent imgUrl="/image2.jpg" heading="Collaboration" subHeading="Lorem ipsum dolor sit amet">
                <ContentCard/>
            </ParallaxContent>

            <ParallaxContent imgUrl="/image2.jpg" heading="Modern" subHeading="Lorem ipsum dolor sit amet">
                <ContentCard/>
            </ParallaxContent>
        </div>
    )
}