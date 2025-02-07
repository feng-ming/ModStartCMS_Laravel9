<?php


namespace Module\Member\Widget\Field;


use ModStart\Field\AbstractField;
use ModStart\Field\Text;
use ModStart\Field\Type\FieldRenderMode;
use Module\Member\Util\MemberCmsUtil;


class AdminMemberInfo extends Text
{
    protected $view = 'modstart::core.field.text';
    protected $editable = false;

    protected function setup()
    {
        parent::setup();
        $this->addVariables([
            'memberFieldName' => null,
        ]);
    }

    public function memberFieldName($v)
    {
        $this->addVariables(['memberFieldName' => $v]);
        return $this;
    }

    public function renderView(AbstractField $field, $item, $index = 0)
    {
        switch ($field->renderMode()) {
            case FieldRenderMode::GRID:
            case FieldRenderMode::DETAIL:
                $this->hookRendering(function (AbstractField $field, $item, $index) {
                    $column = $field->column();
                    return MemberCmsUtil::showFromId($item->{$column}, $this->getVariable('memberFieldName'));
                });
        }
        return parent::renderView($field, $item, $index);
    }
}
