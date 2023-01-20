import styled from 'styled-components'
import CatImage from './../images/Cat image.svg'


const ProductContainer = styled.div`
  --backgroundColor: #1698d9;
  --descriptionColor: #fff;
  --productColor: #666;
  --primaryColor: #000;

  display: flex;
  flex-direction: column;
  width: 400px;

  &.man{
    --backgroundColor: #1698D9;
    --descriptionColor: #fff;
    --productColor: #666;
    --primaryColor: #000;
  
    &:hover {
      --backgroundColor: #2EA8E6;
    }
  }
  &.woman{
    --backgroundColor: #D91667;
    --descriptionColor: #fff;
    --productColor: #666;
    --primaryColor: #000;

    &:hover {
      --backgroundColor: #E52E7A;;
    }
  }

  &.not-in-stock {
    --backgroundColor: #b3b3b3;
    --productColor: #f2f2f2;
    --primaryColor: #f2f2f2;
    --descriptionColor: #FFFF66;

    & img {
      opacity: .5;
    }
  }

  `;

const ProductBlock = styled.div`
  padding: .15rem;
  border-radius: 5px;
  clip-path: polygon(12% 0, 100% 0, 100% 100%, 0 100%, 0 10%);
  color: #000;  
  transition: background-color 300ms ease-in;
  margin-bottom: .5rem;
  background-color: var(--backgroundColor);
`;

const ProductText = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`
const ProductWrapper = styled.div`
  border-radius: 5px;
  background-color: #fff;
  clip-path: polygon(12% 0, 100% 0, 100% 100%, 0 100%, 0 10%);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding-top: .5rem;
  position: relative;
  `;
const ProductTopText = styled.span`
  color: var(--productColor);
`
const ProductTitle = styled.h2`
  font-size: 3rem;
  color: var(--primaryColor);
`
const ProductSubtitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: .5rem;
  color: var(--primaryColor);
`;


const ProductDescription = styled.span`
  color: var(--productColor);
`

const ProductCatImage = styled.img`
  position: relative;
  bottom: -6rem;
  left: -2rem;
  width: 100%;
`

const WeightContainer = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  position: absolute;
  right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  bottom: 1rem;
  transition: background-color 300ms ease-in;
  text-transform: uppercase;
  background-color: var(--backgroundColor);
`;

const WeightTitle = styled.span`
  font-size: 2.5rem;
`

const WeightMeasurement = styled.span`
  font-size: .8rem;
`



interface IProps extends React.PropsWithChildren {
    type: 'man' | 'woman' | 'not-in-stock'
    topText: string
    flavor: string
    total: number
    mouseAmount: number
    weight: number

}

export const Product: React.FC<IProps> = ({ children, type, topText, flavor, total, mouseAmount, weight }) => {
    return <ProductContainer
        className={type}
    >
        <ProductBlock>
            <ProductWrapper>
                <ProductText>
                    <ProductTopText>{topText}</ProductTopText>
                    <ProductTitle>Нямушка</ProductTitle>
                    <ProductSubtitle>{flavor}</ProductSubtitle>
                    <ProductDescription>
                        <b>{total}</b> порци{total === 1 ? 'я' : 'й'}
                    </ProductDescription>
                    <ProductDescription>
                        <b>{mouseAmount > 1 ? mouseAmount + ' ' : ' '}</b>мыш{mouseAmount === 1 ? 'ь ' : 'и '}
                        в подарок
                    </ProductDescription>
                </ProductText>
                {/* if one without if more one b exists */}
                <ProductCatImage
                    src={CatImage}
                    alt='cat'
                />
                <WeightContainer
                    className="weight"
                >
                    <WeightTitle>{weight}</WeightTitle>
                    <WeightMeasurement>Кг</WeightMeasurement>
                </WeightContainer>
            </ProductWrapper>
        </ProductBlock>
        {
            children
        }
        {/* <ProductThought>Чего сидишь? Порадуй котэ, <BuyButton href="#1">купи</BuyButton></ProductThought> */}
    </ProductContainer>
}